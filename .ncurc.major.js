const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: ['eslint', 'vite', '@vitejs/plugin-react', ...minorConfig.reject],
  target: 'latest',
};
