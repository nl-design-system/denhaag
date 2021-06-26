import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import _ from 'lodash';
import path from 'path';
import postcss from 'rollup-plugin-postcss';

import tsconfig from './tsconfig.json';

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
    postcss({
      extensions: ['.css'],
      minimize: true,
    }),
    nodeResolve(),
    commonjs({ include: /node_modules/ }),
    svgr({ icon: true, svgo: true, memo: true }),
    typescript({ cacheDir: path.join(__dirname, '.rollup-cache') }),
  ],
  external: dependencies,
};
