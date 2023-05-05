// @ts-check
/* eslint-disable */

const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');

const config = JSON.parse(fs.readFileSync('tsconfig.json').toString());
config.files = [];
config.references = [];

(async function () {
  const { stdout, stderr } = await exec('pnpm workspaces info --json');

  const lines = stdout.split(/\r\n|\n\r|\n|\r/);
  const depthTree = lines.slice(1, lines.length - 2).join('\n');
  let workspaces = undefined;

  // sometimes pnpm prints this line: pnpm run v1.22.10 and sometimes not
  try {
    workspaces = JSON.parse(depthTree);
  } catch (e) {
    workspaces = JSON.parse(stdout);
  }

  for (const name in workspaces) {
    const workspace = workspaces[name];
    const location = path.resolve(process.cwd(), workspace.location);
    const tsconfigPath = path.resolve(location, 'tsconfig.json');

    if (fs.existsSync(tsconfigPath)) {
      config.references.push({
        path: workspace.location,
      });
      const workspaceConfig = JSON.parse(fs.readFileSync(tsconfigPath).toString());
      workspaceConfig.compilerOptions.composite = true;
      workspaceConfig.references = [];
      for (const dependency of workspace.workspaceDependencies) {
        const dependecyLocation = path.resolve(process.cwd(), workspaces[dependency].location);
        if (fs.existsSync(path.resolve(dependecyLocation, 'tsconfig.json'))) {
          workspaceConfig.references.push({
            path: path.relative(location, dependecyLocation),
          });
        }
      }
      fs.writeFileSync(tsconfigPath, JSON.stringify(workspaceConfig, undefined, 4));
    }
  }
  fs.writeFileSync('tsconfig.json', JSON.stringify(config, undefined, 4));
})();
