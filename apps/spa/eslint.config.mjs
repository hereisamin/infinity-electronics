import baseConfig from '../../eslint.config.mjs';
import vue from 'eslint-plugin-vue';

export default [
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      "vue/html-closing-bracket-newline": [
    "error",
    {
      "singleline": "never",
      "multiline": "never",
      "selfClosingTag": {
        "singleline": "never",
        "multiline": "never"
      }
    }
  ]
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
