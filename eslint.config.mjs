import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: react,
      '@typescript-eslint': typescriptEslint,
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: '19.1.1',
      },
    },
    rules: {
      'css.lint.unknownAtRules': 'off',
      'no-console': 'warn',
      'no-var': 'error',
      'no-debugger': 'warn',
      'no-multiple-empty-lines': 'error',
      'space-in-parens': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'error',
      'no-useless-return': 'off',
      'react/boolean-prop-naming': 'error',
      'react/destructuring-assignment': 'error',
      'react/hook-use-state': 'error',
      'react/no-multi-comp': 'error',
      'react/no-unused-prop-types': 'warn',
      'react/no-unused-state': 'error',
      'react/sort-prop-types': 'error',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'error',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-tag-spacing': [
        'error',
        {
          beforeSelfClosing: 'always',
          closingSlash: 'never',
          afterOpening: 'never',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^__' }],
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [['^react', '^redux', '^@redux', '^'], ['^@'], ['^\\/', '^\\.'], ['^.+\\.s?css$']],
        },
      ],
    },
  },
]);
