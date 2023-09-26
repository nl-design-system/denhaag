import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../../../.storybook/stories/**/*.stories.mdx',
    '../../../components/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../components/*/src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|mdx|ts|tsx)',
  ],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
    'storybook-addon-themes',
    '@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['../../../.storybook/stories/assets/'],
  docs: {
    autodocs: true,
  },
};

export default config;
