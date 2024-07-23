import globals from 'globals';
import json from 'eslint-plugin-json';
import mdxPlugin from 'eslint-plugin-mdx';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
//import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import { reactRules, tsRules, jsRules } from './eslint.rules.mjs';

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/build/',
      '**/dist/',
      '**/storybook-static/',
      '**/*.min.js',
      'scripts/',
      '.ncurc.*',
      'package-lock.json',
      'pnpm-lock.yaml',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.json'],
    ...json.configs.recommended,
  },
  {
    files: ['*.mdx'],
    plugins: {
      mdx: mdxPlugin,
      import: importPlugin,
      react: reactPlugin,
      //'react-hooks': hooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      //...hooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
      ...mdxPlugin.configs.overrides.rules,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs'],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      //'react-hooks': hooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      //...hooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      ...jsRules,
      ...reactRules,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      react: reactPlugin,
      //'react-hooks': hooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsxA11yPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      //...hooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...jsRules,
      ...tsRules,
      ...reactRules,
    },
  },
];
