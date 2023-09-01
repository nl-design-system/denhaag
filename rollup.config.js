import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';

import tsconfig from './tsconfig.json';
import summary from 'rollup-plugin-summary';

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

const createConfig = ({ dir, format }) => ({
  input: 'src/index.tsx',
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
      cacheDir: path.join(__dirname, '.rollup-cache'),
      tsBuildInfoFile: `${dir}/.tsbuildinfo`,
      compilerOptions: {
        outDir: dir,
      },
    }),
    summary(),
  ],
  external: dependencies,
});

export default [
  createConfig({ format: 'cjs', dir: './dist/cjs' }),
  createConfig({ format: 'esm', dir: './dist/mjs' }),
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
].filter(inputExists);
