import minorConfig from './.ncurc.minor.mjs';

// ESLint: cannot be upgraded to v10 until eslint-plugin-react, eslint-plugin-jsx-a11y and eslint-plugin-import are supporting ESLint v10.
// TypeScript: cannot be upgraded to v6 until @typescript-eslint/eslint-plugin and @typescript-eslint/parser are supporting TypeScript v6.

export default {
  ...minorConfig,
  reject: ['eslint', 'typescript', ...minorConfig.reject],
  target: 'latest',
};
