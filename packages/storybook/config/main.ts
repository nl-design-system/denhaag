import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.@(stories.@(js|jsx|ts|tsx))'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/preset-scss',
    // TODO enable when upgraded to storybook 9
    //'@etchteam/storybook-addon-status',
    // '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
  ],
  staticDirs: ['../src/assets'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: { 'process.env': {} },
    });
  },
};

export default config;
