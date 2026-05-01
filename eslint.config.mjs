import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import importX from 'eslint-plugin-import-x';

// eslint-disable-next-line import-x/no-anonymous-default-export
export default [
  ...nextTypescript,
  {
    ignores: ['next-env.d.ts', 'next.config.js'],
  },
  ...nextCoreWebVitals,
  {
    settings: {
      react: {
        version: '19',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.style.ts'],
    plugins: {
      'import-x': importX,
    },
    rules: {
      'import/no-cycle': 'off',
      'import/order': 'off',
      'import-x/no-cycle': 2,
      'import-x/order': [
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
  },
];
