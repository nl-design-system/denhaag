/**
 * @type {import('prettier').Config}
 */
export default {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.html'],
      options: {
        parser: 'html',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.mjs'],
      options: {
        parser: 'flow',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['package.json'],
      options: {
        parser: 'json-stringify',
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      // match pnpm CLI-driven changes behavior
      files: ['pnpm-workspace.yaml'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
