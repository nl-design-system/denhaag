/**
 * @type {import('prettier').Config}
 */
export default {
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'html',
        printWidth: 120,
      },
    },
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      options: {
        parser: 'flow',
        printWidth: 120,
        singleQuote: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        printWidth: 120,
        singleQuote: true,
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
        printWidth: 120,
      },
    },
    {
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};
