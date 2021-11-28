module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    projects: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['svelte3', '@typescript-eslint', 'prettier'],
  rules: {
    semi: 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-return-assign': 'off',
    'import/no-unresolved': 'off',
    // 'prettier/prettier': 'error',
    'prettier/prettier': 'off',
    'prefer-spread': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-mutable-exports': 'off',
    'import/first': 'off',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': true,
  },
  ignorePatterns: ['node_modules', '.routify'],
  globals: {
    kakao: true,
    $: true,
  },
}
