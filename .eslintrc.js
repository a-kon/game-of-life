const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['cumul8', 'react', 'import', 'jsx-a11y'],
  env: {
    browser: true
  },
  globals: {
    document: false
  },
  rules: {
    'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
    'consistent-return': 'warn',
    "max-len": ["error", 120],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  },
  settings: {
    'import/resolver': 'webpack'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
