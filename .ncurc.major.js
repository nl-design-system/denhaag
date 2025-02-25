const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject],
  target: 'latest',
};
