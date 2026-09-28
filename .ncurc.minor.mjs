import patchConfig from './.ncurc.patch.mjs';

export default {
  ...patchConfig,
  reject: [...patchConfig.reject, '@open-formulieren/sdk'],
  target: 'minor',
};
