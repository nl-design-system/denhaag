const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, '@utrecht/component-library-react'],
  target: 'latest',
};
