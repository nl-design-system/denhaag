import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-import-css';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.tsx',
  output: {
    dir: './dist',
    sourcemap: true,
    format: 'esm',
  },
  plugins: [nodeResolve(), commonjs({ include: /node_modules/ }), css(), typescript({ tsconfig: 'tsconfig.json' })],
};
