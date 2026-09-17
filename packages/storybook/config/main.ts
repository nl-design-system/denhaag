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
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/preset-scss',
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
