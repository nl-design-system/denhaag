const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, 'react', 'react-dom'],
  target: 'latest',
};
