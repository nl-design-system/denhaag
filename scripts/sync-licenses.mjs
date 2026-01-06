import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, lstat, readlink, readdir, symlink, unlink } from 'node:fs/promises';

// Creates LICENSE.md symlinks for each component package.
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

async function ensureLicenseLink(componentPath) {
  const destination = path.join(componentPath, 'LICENSE.md');
  const relativeTarget = path.relative(componentPath, licensePath);

  if (await exists(destination)) {
    const stats = await lstat(destination);

    if (stats.isSymbolicLink()) {
      const currentTarget = await readlink(destination);
      const resolvedTarget = path.resolve(componentPath, currentTarget);

      if (resolvedTarget === path.resolve(licensePath)) {
        console.log(`Already linked: ${destination}`);
        return;
      }

      await unlink(destination);
    } else {
      console.warn(`Skipping ${destination}: file exists and is not a symlink`);
      return;
    }
  }

  await symlink(relativeTarget, destination);
  console.log(`Linked ${destination} -> ${relativeTarget}`);
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

    await ensureLicenseLink(componentPath);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
