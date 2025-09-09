import nx from '@nx/eslint-plugin';
import * as restly from '@restly/eslint-rules';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.json'],
    rules: {},
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },

  {
    files: ['**/*.ts'],
    plugins: {
      restly: restly.configs,
    },
    rules: {
      'restly/controller-class-name': 'error',
    },
  },

  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
];
