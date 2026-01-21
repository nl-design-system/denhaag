import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, lstat, readFile, readdir, unlink, writeFile } from 'node:fs/promises';

// Writes a clickable LICENSE.md stub into each component package.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const componentsDir = path.join(rootDir, 'components');
const licensePath = path.join(rootDir, 'LICENSE.md');

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureLicenseFile(componentPath) {
  const destination = path.join(componentPath, 'LICENSE.md');
  const relativeTarget = path.relative(componentPath, licensePath);
  const content = `This component is licensed under EUPL-1.2. See [LICENSE](${relativeTarget}).\n`;

  if (await exists(destination)) {
    const stats = await lstat(destination);

    if (stats.isSymbolicLink()) {
      await unlink(destination);
    } else {
      const existing = await readFile(destination, 'utf8');

      if (existing === content) {
        console.log(`Already up to date: ${destination}`);
        return;
      }

      console.warn(`Skipping ${destination}: file exists and is not a symlink`);
      return;
    }
  }

  await writeFile(destination, content, 'utf8');
  console.log(`Wrote license stub at ${destination}`);
}

async function main() {
  if (!(await exists(licensePath))) {
    throw new Error(`Missing root license at ${licensePath}`);
  }

  const entries = await readdir(componentsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const componentPath = path.join(componentsDir, entry.name);
    const packageJsonPath = path.join(componentPath, 'package.json');

    if (!(await exists(packageJsonPath))) {
      continue;
    }

    await ensureLicenseFile(componentPath);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
