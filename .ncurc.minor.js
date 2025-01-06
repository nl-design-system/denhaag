const patchConfig = require('./.ncurc.patch');

module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject, '@nl-design-system-unstable/theme-toolkit'],
  target: 'minor',
};
