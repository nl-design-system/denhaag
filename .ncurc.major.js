const minorConfig = require('./.ncurc.minor');

// Prettier v3 breaks storybook: https://github.com/whitespace-se/storybook-addon-html/issues/104

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject],
  target: 'latest',
};
