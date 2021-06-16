import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-import-css';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import tsconfig from './tsconfig.json';
import _ from 'lodash';
import path from 'path';
import image from '@rollup/plugin-image';

const externalDependencies = ['react', 'react-dom', '@material-ui/core'];
const internalDependencies = _.keys(tsconfig.compilerOptions.paths);
const dependencies = externalDependencies.concat(internalDependencies);

export default {
  input: 'src/index.tsx',
  output: {
    dir: './dist',
    sourcemap: false,
    format: 'esm',
    compact: true,
  },
  plugins: [
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    css({ minify: true }),
    image(),
    typescript({ cacheDir: path.join(__dirname, '.rollup-cache') }),
  ],
  external: dependencies,
};
