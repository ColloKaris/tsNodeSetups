module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.ts'],
      parserOptions: {
        sourceType: 'script',
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [0],
    'class-methods-use-this': [0],
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
