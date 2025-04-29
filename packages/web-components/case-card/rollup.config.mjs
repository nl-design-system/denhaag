import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

const config = {
  input: 'src/index.ts',
  output: {
    dir: './dist',
    sourcemap: false,
    format: 'esm',
    compact: true,
  },
  plugins: [nodeResolve(), typescript()],
};

export default config;
