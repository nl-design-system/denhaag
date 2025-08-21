import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const configs = [
  {
    input: 'src/element.ts',
    output: {
      dir: './dist',
      entryFileNames: 'element.js',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.build.json' })],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: './dist',
      entryFileNames: 'index.js',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.build.json' })],
    external: ['./element.js'],
  },
];

export default configs;
