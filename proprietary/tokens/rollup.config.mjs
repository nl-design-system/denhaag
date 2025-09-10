import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';

export default {
  input: 'src/index.scss',
  output: {
    dir: './dist/theme/',
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
};
