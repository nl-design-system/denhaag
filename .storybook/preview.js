import '../proprietary/Proprietary/dist/theme/index.css';
import '../proprietary/Components/dist/theme/index.css';
import '../proprietary/Common/dist/theme/index.css';
import StylesProvider from '@gemeente-denhaag/stylesprovider';
import { ThemeDecorator } from 'storybook-addon-themes/dist/decorators/react';
import { getConfigFromApi } from 'storybook-addon-themes/dist/shared';

const tokenContext = require.context(
  '!!raw-loader!../proprietary',
  true,
  /^((?![\\/]node_modules|dist[\\/]).)*\.(css|less|scss|sass|svg)$/,
);

const tokenFiles = tokenContext.keys().map((filename) => {
  return { filename: filename, content: tokenContext(filename).default };
});

const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#006400',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#cca300',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
      },
      'WORK IN PROGRESS': {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
      },
    },
  },
};

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
  status: addonStatus.status,
};

export const decorators = [
  (Story) => (
    <ThemeDecorator config={parameters.themes}>
      <StylesProvider>{<Story />}</StylesProvider>
    </ThemeDecorator>
  ),
];
