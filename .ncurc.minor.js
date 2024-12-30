const patchConfig = require('./.ncurc.patch');

// TODO: kan update niet uitvoeren omdat functie in laatste versie is disabled: https://github.com/nl-design-system/themes/commit/637fcb0ff11e3edcb0f61f967a45dcc6c7af8669#r150807599
module.exports = {
  ...patchConfig,
  reject: [...patchConfig.reject, '@nl-design-system-unstable/theme-toolkit'],
  target: 'minor',
};
