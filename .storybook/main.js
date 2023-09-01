module.exports = {
  stories: [
    './stories/**/*.stories.mdx',
    '../components/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/*/src/**/*.stories.mdx',
    '../packages/storybook/src/**/*.stories.@(js|jsx|mdx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/preset-scss',
    'storybook-addon-themes',
    'storybook-design-token',
    '@etchteam/storybook-addon-status/register',
  ],
  staticDirs: ['./stories/assets/'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, _) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
