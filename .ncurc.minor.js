const patchConfig = require('./.ncurc.patch');

module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject],
  target: 'minor',
};
