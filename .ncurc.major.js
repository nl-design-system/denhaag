const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: ['eslint', ...minorConfig.reject],
  target: 'latest',
};
