import '@gemeente-denhaag/design-tokens-proprietary/dist/theme/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import '@gemeente-denhaag/design-tokens-common/dist/theme/index.css';
import StylesProvider from '@gemeente-denhaag/stylesprovider';
import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';

addDecorator(withThemes);

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
  themes: {
    default: 'Gemeente Den Haag',
    list: [{ name: 'Gemeente Den Haag', class: 'denhaag-theme', color: '#227b3c' }],
  },
};

export const decorators = [(Story) => <StylesProvider>{<Story />}</StylesProvider>];
