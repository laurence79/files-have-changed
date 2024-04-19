/* eslint-env node */
module.exports = {
  root: true,
  env: { node: true },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname
      },
      plugins: ['@typescript-eslint', 'import', 'prettier'],
      extends: [
        'airbnb-base',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/prettier'
      ],
      rules: {
        'no-restricted-syntax': 'off',
        'consistent-return': 'off',
        'no-void': 'off',

        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'import',
            format: ['camelCase', 'PascalCase']
          },
          {
            filter: { regex: '^_+$', match: false },
            selector: 'default',
            format: ['camelCase']
          },
          {
            filter: { regex: '^_+$', match: false },
            selector: 'variable',
            format: ['PascalCase', 'camelCase', 'UPPER_CASE']
          },
          {
            selector: 'typeLike',
            format: ['PascalCase']
          },
          {
            selector: 'property',
            format: ['PascalCase', 'camelCase'],
            leadingUnderscore: 'allow'
          },
          {
            selector: 'function',
            format: ['PascalCase', 'camelCase']
          },
          {
            filter: { regex: '^_+$', match: false },
            selector: 'parameter',
            format: ['PascalCase', 'camelCase']
          },
          {
            filter: { regex: '^_+$', match: false },
            selector: 'parameterProperty',
            format: ['PascalCase', 'camelCase']
          },
          {
            selector: 'objectLiteralProperty',
            format: []
          }
        ]
      }
    },
    {
      files: ['**/*.js'],
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/prettier'
      ],
      plugins: ['prettier'],
      parserOptions: {
        ecmaVersion: 'latest'
      },
      env: {
        es6: true
      }
    }
  ]
};
