const minorConfig = require('./.ncurc.minor');

// ESLint cannot be upgraded to v10 until eslint-plugin-react, eslint-plugin-jsx-a11y and eslint-plugin-import are supporting ESLint v10.
module.exports = {
  ...minorConfig,
  reject: ['eslint', ...minorConfig.reject],
  target: 'latest',
};
