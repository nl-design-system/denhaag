module.exports = {
  stories: ['./stories/*.stories.mdx', '../src/components/*/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-design-token'],

  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  babel: async (options) => {
    const { plugins = [] } = options;
    return {
      ...options,
      plugins: [...plugins, [require.resolve('@babel/plugin-proposal-private-property-in-object'), { loose: true }]],
    };
  },
};
