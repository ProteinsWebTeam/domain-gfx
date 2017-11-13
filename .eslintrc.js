const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'object-property-newline': ['off'],
    'spaced-comment': ['warn', 'always', { markers: [':', '::'] }],
    'no-debugger': [PROD ? 'on' : 'off'],
  },
};
