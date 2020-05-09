module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/camelcase': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', js: 'never' },
    ],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.ts'] },
    },
  },
};
