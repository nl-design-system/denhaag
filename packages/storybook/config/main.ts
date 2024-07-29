import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const getAbsolutePath = (packageName: string) => path.dirname(require.resolve(path.join(packageName, 'package.json')));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.@(stories.@(js|jsx|ts|tsx))'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('storybook-addon-themes'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],
  staticDirs: ['../src/assets'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: { 'process.env': {} },
    });
  },
};

export default config;
