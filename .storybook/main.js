module.exports = {
  stories: [
    // '../src/stories/*.stories.mdx',
    // '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    // '../src/stories/*/*.stories.@(js|jsx|ts|tsx)',
    './stories/*.stories.mdx',
    '../src/components/*/*.stories.mdx',
    '../src/components/*/src/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
