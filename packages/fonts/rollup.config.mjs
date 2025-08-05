import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';
import copy from 'rollup-plugin-copy'; // <-- add

export default {
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
    copy({
      targets: [{ src: 'src/assets/fonts/*.woff2', dest: 'dist/fonts' }],
      hook: 'writeBundle',
    }),
  ],
};
