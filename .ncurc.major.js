const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, 'react', 'react-dom', '@types/react', '@types/react-dom'],
  target: 'latest',
};
