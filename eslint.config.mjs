import nextTypescript from "eslint-config-next/typescript";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import { FlatCompat } from '@eslint/eslintrc';
import jsxa11y from 'eslint-plugin-jsx-a11y';

const compat = new FlatCompat();

export default [...nextTypescript, {
  ignores: ['next-env.d.ts', 'next.config.js'],
}, ...compat.extends("plugin:jsx-a11y/strict"), ...nextCoreWebVitals, {
  plugins: {
    'jsx-a11y': jsxa11y,
  },
  files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.style.ts'],
  rules: {
    'import/no-cycle': 2,
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'internal',
          'builtin',
          'external',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
          },
          {
            pattern: 'next*',
            group: 'builtin',
          },
          {
            pattern: 'next/**',
            group: 'builtin',
          },
          {
            pattern: '~/public/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: './parts',
            group: 'object',
            position: 'after',
          },
          {
            pattern: './*.style',
            group: 'object',
            position: 'after',
          },
          {
            pattern: './*.data',
            group: 'object',
            position: 'after',
          },
          {
            pattern: './*.type',
            group: 'object',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
}];
