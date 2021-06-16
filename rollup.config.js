import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: {
    dir: './dist',
    sourcemap: true,
    format: 'esm',
    clean: true,
  },
  plugins: [typescript({ tsconfig: 'tsconfig.json' })],
};
