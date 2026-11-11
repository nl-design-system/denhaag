import { readFile, readdir, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import StyleDictionary from 'style-dictionary';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ignored = new Set(['node_modules', 'dist', 'build', 'coverage', 'storybook-static']);
const sourceExtension = /\.(?:css|scss|[cm]?js|jsx|ts|tsx)$/;
const stylesheetExtension = /\.(?:css|scss)$/;
const relative = (file) => path.relative(path.toNamespacedPath(root), path.toNamespacedPath(file)).split(path.sep).join('/');

async function isFile(file) {
  return stat(file).then(
    (value) => value.isFile(),
    () => false,
  );
}

async function sourceFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(file)));
    else if (entry.isFile() && sourceExtension.test(file)) files.push(file);
  }
  return files.sort();
}

function withoutComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

export function stylesheetImports(source, isStylesheet) {
  const imports = new Set();
  const text = withoutComments(source);
  if (isStylesheet) {
    for (const match of text.matchAll(/@(?:use|forward|import)\s+([^;]+);/g)) {
      for (const specifier of match[1].matchAll(/["']([^"']+)["']/g)) imports.add(specifier[1]);
    }
  } else {
    for (const match of text.matchAll(
      /(?:\bimport\s*(?:[^;\n]*?\sfrom\s*)?|\b(?:import|require)\s*\()\s*["']([^"']+\.(?:css|scss))["']/g,
    )) {
      imports.add(match[1]);
    }
  }
  return [...imports];
}

async function stylesheetFile(target) {
  const extension = path.extname(target);
  const stem = extension ? target.slice(0, -extension.length) : target;
  const candidates = extension
    ? [target, path.join(path.dirname(stem), `_${path.basename(stem)}${extension}`)]
    : [
        target,
        `${target}.scss`,
        `${target}.css`,
        path.join(path.dirname(target), `_${path.basename(target)}.scss`),
        path.join(target, '_index.scss'),
        path.join(target, 'index.scss'),
        path.join(target, 'index.css'),
      ];
  for (const file of candidates) {
    if (await isFile(file)) return await realpath(file);
  }
}

async function resolveStylesheet(specifier, importer) {
  if (specifier.startsWith('sass:')) return { ignored: true };
  const clean = specifier.replace(/^~/, '');
  let target;
  if (stylesheetExtension.test(importer) && !specifier.startsWith('~')) {
    const local = await stylesheetFile(path.resolve(path.dirname(importer), clean));
    if (local) return { file: local };
  }
  if (clean.startsWith('.') || path.isAbsolute(clean)) {
    target = path.resolve(path.dirname(importer), clean);
  } else {
    const parts = clean.split('/');
    const name = parts.splice(0, clean.startsWith('@') ? 2 : 1).join('/');
    // Theme declarations are output, never evidence of component usage.
    if (name === '@gemeente-denhaag/design-tokens') return { ignored: true };
    let directory = path.dirname(importer);
    let packageDirectory;
    while (true) {
      const candidate = path.join(directory, 'node_modules', name);
      if (await isFile(path.join(candidate, 'package.json'))) {
        packageDirectory = await realpath(candidate);
        break;
      }
      const parent = path.dirname(directory);
      if (parent === directory) break;
      directory = parent;
    }
    if (!packageDirectory) return {};
    // All workspace source styles are scanned, even before packages have been built.
    if (!packageDirectory.includes(`${path.sep}node_modules${path.sep}`) && parts[0] === 'dist') {
      if (
        await stat(path.join(packageDirectory, 'src')).then(
          (value) => value.isDirectory(),
          () => false,
        )
      ) {
        return { ignored: true };
      }
    }
    const manifest = JSON.parse(await readFile(path.join(packageDirectory, 'package.json'), 'utf8'));
    const subpath = parts.length ? `./${parts.join('/')}` : '.';
    let exported = manifest.exports?.[subpath];
    if (!exported) {
      for (const [pattern, value] of Object.entries(manifest.exports || {})) {
        const star = pattern.indexOf('*');
        if (star < 0 || typeof value !== 'string') continue;
        const prefix = pattern.slice(0, star);
        const suffix = pattern.slice(star + 1);
        if (subpath.startsWith(prefix) && subpath.endsWith(suffix)) {
          exported = value.replaceAll('*', subpath.slice(prefix.length, suffix ? -suffix.length : undefined));
          break;
        }
      }
    }
    // CSS exports normally map directly to a file. Report unsupported conditional exports as incomplete.
    if (exported && typeof exported !== 'string') return {};
    target = path.resolve(packageDirectory, exported || parts.join('/') || manifest.style || 'index');
  }
  return { file: await stylesheetFile(target) };
}

export async function scanUsage(files) {
  const usage = new Map();
  const checked = new Set();
  const issues = [];
  const queue = [...files];
  for (let index = 0; index < queue.length; index++) {
    const file = await realpath(queue[index]);
    if (checked.has(file)) continue;
    checked.add(file);
    const source = withoutComments(await readFile(file, 'utf8'));
    for (const match of source.matchAll(
      /var\(\s*(--[\w-]+)|(?:getPropertyValue|setProperty)\(\s*['"](--[\w-]+)['"]/g,
    )) {
      const name = match[1] || match[2];
      if (!usage.has(name)) usage.set(name, new Set());
      usage.get(name).add(relative(file));
    }
    if (/var\(\s*#\{|@(?:use|import|forward)[^;]*#\{/.test(source)) {
      issues.push({ file: relative(file), reason: 'Dynamic stylesheet import or variable name' });
    }
    for (const specifier of stylesheetImports(source, stylesheetExtension.test(file))) {
      const resolved = await resolveStylesheet(specifier, file);
      if (resolved.file) queue.push(resolved.file);
      else if (!resolved.ignored)
        issues.push({ file: relative(file), import: specifier, reason: 'Stylesheet could not be resolved' });
    }
  }
  return { usage, checkedFiles: [...checked].map(relative).sort(), issues };
}

function tokenReferences(value) {
  return [...JSON.stringify(value ?? '').matchAll(/\{([^{}]+)\}/g)].map((match) => match[1]);
}

export function classifyTokens(tokens, usage, issues) {
  const byPath = new Map(tokens.map((token) => [token.path.join('.'), token]));
  const requiredBy = new Map();
  const used = new Set();
  const queue = [];
  for (const token of tokens) {
    // Retained primitive/common tokens must keep their dependencies too.
    if (!token.component || usage.has(`--${token.name}`)) {
      used.add(token.name);
      queue.push(token);
    }
  }
  for (let index = 0; index < queue.length; index++) {
    const token = queue[index];
    for (const reference of tokenReferences(token.original.value ?? token.original.$value)) {
      const dependency = byPath.get(reference);
      if (!dependency) throw new Error(`Unresolved token reference: ${reference}`);
      if (!requiredBy.has(dependency.name)) requiredBy.set(dependency.name, new Set());
      requiredBy.get(dependency.name).add(`--${token.name}`);
      if (!used.has(dependency.name)) {
        used.add(dependency.name);
        queue.push(dependency);
      }
    }
  }
  return tokens
    .filter((token) => token.component)
    .map((token) => ({
      token: `--${token.name}`,
      file: token.filePath,
      status: used.has(token.name) ? 'used' : issues.length ? 'incomplete' : 'possibly-unused',
      usedIn: [...(usage.get(`--${token.name}`) || [])].sort(),
      requiredBy: [...(requiredBy.get(token.name) || [])].sort(),
    }))
    .sort((a, b) => a.token.localeCompare(b.token));
}

async function main() {
  const args = process.argv.slice(2);
  if (args.some((arg) => !['--json', '--help'].includes(arg))) throw new Error('Usage: pnpm tokens:check [--json]');
  if (args.includes('--help')) {
    console.log(
      'Usage: pnpm tokens:check [--json]\nReports component token usage without changing or deleting tokens.',
    );
    return;
  }
  const tokenDirectory = path.join(root, 'proprietary/tokens');
  const config = JSON.parse(await readFile(path.join(root, 'style-dictionary.config.json'), 'utf8'));
  const dictionary = await new StyleDictionary({
    source: config.source.map((pattern) => path.resolve(tokenDirectory, pattern).split(path.sep).join('/')),
    platforms: { css: { transforms: config.platforms.css.transforms } },
    log: { verbosity: 'silent', errors: { brokenReferences: 'throw' } },
  }).getPlatformTokens('css');
  const tokens = dictionary.allTokens.map((token) => {
    const file = relative(path.resolve(token.filePath));
    return {
      ...token,
      filePath: file,
      component:
        file.startsWith('proprietary/tokens/src/components/') || /^components\/[^/]+\/tokens\.json$/.test(file),
    };
  });
  const files = (
    await Promise.all(['components', 'packages'].map((directory) => sourceFiles(path.join(root, directory))))
  ).flat();
  const scan = await scanUsage(files);
  const results = classifyTokens(tokens, scan.usage, scan.issues);
  const summary = { used: 0, 'possibly-unused': 0, incomplete: 0 };
  for (const result of results) summary[result.status]++;
  const report = { summary, checkedFiles: scan.checkedFiles, issues: scan.issues, tokens: results };
  if (args.includes('--json')) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(
      `Component tokens: ${results.length}; used: ${summary.used}; possibly unused: ${summary['possibly-unused']}; incomplete: ${summary.incomplete}`,
    );
    console.log(
      `Checked ${scan.checkedFiles.length} source files and imported stylesheets. Primitive/common tokens are retained.\n`,
    );
    for (const result of results.filter((token) => token.status !== 'used'))
      console.log(`${result.status}\t${result.token}\t${result.file}`);
    for (const issue of scan.issues)
      console.log(`\nINCOMPLETE: ${issue.file}: ${issue.import || ''} (${issue.reason})`);
    console.log(
      '\nUse --json for all tokens, usage locations, token dependencies and checked files. No tokens were modified.',
    );
  }
  // Candidates are informational; an incomplete scan is an operational error.
  if (scan.issues.length) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
