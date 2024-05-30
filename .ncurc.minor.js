const patchConfig = require('./.ncurc.patch');

module.exports = {
  ...patchConfig,
  reject: [
    ...patchConfig.reject,
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    'react-is',
    'react-test-renderer',
  ],
  target: 'minor',
};
