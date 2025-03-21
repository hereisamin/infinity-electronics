import baseConfig from '../../eslint.config.mjs';
import vue from 'eslint-plugin-vue';

export default [
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: await import('@typescript-eslint/parser'),
      },
    },
  },
  {
    ignores: ['.nuxt/**', '.output/**', 'node_modules'],
  },
];
