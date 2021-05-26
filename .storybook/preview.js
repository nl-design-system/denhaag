import '@gemeente-denhaag/design-tokens-proprietary';
import '@gemeente-denhaag/design-tokens-components';
import '@gemeente-denhaag/design-tokens-common';

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /^((?![\\/]node_modules|dist[\\/]).)*\.(css|less|scss|sass|svg)$/,
);

const tokenFiles = tokenContext.keys().map((filename) => {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  designToken: {
    files: tokenFiles,
  },
  format: false,
  options: {
    storySort: {
      order: ['Den Haag', ['Introduction', 'Design Tokens'], 'Components'],
    },
  },
};
