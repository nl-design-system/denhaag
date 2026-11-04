import jsonc from 'eslint-plugin-jsonc';
import baseConfig from './eslint.config.mjs';

// TODO: After migrating existing component tokens to common tokens, move these rules
// into eslint.config.mjs and the staged Stylelint token rule into .stylelintrc.json.
// Keep them staged-only during the transition so full lint and CI checks do not
// require migrating the entire codebase at once. Then remove both staged configs.

const componentTokenFiles = ['proprietary/tokens/src/components/**/*.json'];

export default [
  ...baseConfig.map((config) =>
    config.processor === 'json/json' ? { ...config, ignores: componentTokenFiles } : config,
  ),
  ...jsonc.configs['recommended-with-json'].map((config) => ({ ...config, files: componentTokenFiles })),
  {
    files: componentTokenFiles,
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSONProperty[key.value=/^\\$?value$/] JSONLiteral[value=/\\{(?!(?:basis|common)\\.)[^{}]+\\}/]',
          message: 'Use a common token reference ({basis.*} or {common.*}).',
        },
      ],
    },
  },
];
