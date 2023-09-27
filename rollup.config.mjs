import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgrImport from '@svgr/rollup';
import _ from 'lodash';
import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';

import { readFileSync } from 'node:fs';
import summary from 'rollup-plugin-summary';

const svgr = svgrImport.default;

const tsconfig = JSON.parse(readFileSync('./tsconfig.json', 'utf8'));

const inputExists = (config) => {
  try {
    return fs.existsSync(config.input);
  } catch (e) {
    return false;
  }
};

const externalDependencies = [
  '@material-ui/core',
  '@material-ui/lab',
  'react',
  'react-dom',
  'date-fns',
  '@material-ui/core/transitions',
  '@material-ui/core/OverridableComponent',
];
const internalDependencies = _.keys(tsconfig.compilerOptions.paths);
const dependencies = externalDependencies.concat(internalDependencies);

const createConfig = ({ dir, format, baseUrl }) => ({
  input: path.join(baseUrl, 'src/index.tsx'),
  output: {
    dir,
    sourcemap: false,
    format,
    compact: true,
  },
  plugins: [
    postcss({
      extensions: ['.css', '.scss'],
      minimize: true,
    }),
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    svgr({ icon: true, svgo: true, memo: true }),
    typescript({
      cacheDir: path.join(path.dirname(import.meta.url), '.rollup-cache'),
      tsconfig: path.join(baseUrl, 'tsconfig.json'),
      tsBuildInfoFile: path.join(baseUrl, '.tsbuildinfo'),
      compilerOptions: {
        outDir: dir,
      },
    }),
    summary(),
  ],
  external: dependencies,
});

const baseUrl = cwd();

const configs = [
  createConfig({ format: 'cjs', dir: './dist/cjs', baseUrl }),
  createConfig({ format: 'esm', dir: './dist/mjs', baseUrl }),
  {
    input: 'src/index.scss',
    output: {
      dir: './dist',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
      }),
    ],
  },
  {
    input: 'src/index.scss',
    output: {
      dir: './dist',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        plugins: [discardDuplicates()],
        extract: true,
      }),
    ],
  },
]
  .map(({ input, ...config }) => ({
    ...config,
    input: path.resolve(cwd(), input),
  }))
  .filter(inputExists);

export default configs;
