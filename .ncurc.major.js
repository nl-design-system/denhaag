const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: ['ejs', 'eslint', 'typescript', 'vite', '@vitejs/plugin-react', ...minorConfig.reject],
  target: 'latest',
};
