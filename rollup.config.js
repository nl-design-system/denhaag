import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: {
    dir: './dist',
    format: 'esm',
    clean: true,
  },
  plugins: [typescript({ tsconfig: 'tsconfig.json' })],
};
