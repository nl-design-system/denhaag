import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../../../.storybook/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
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
  ],
  staticDirs: ['../../../.storybook/stories/assets/'],
  docs: {
    autodocs: 'tag',
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpackFinal: async (config: any) => {
    const rules = config.module.rules;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = rules.find((rule: any) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default config;
