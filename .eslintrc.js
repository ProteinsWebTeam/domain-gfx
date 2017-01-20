const PROD = process.env.NODE_ENV === 'production';

const rules= {
  'comma-dangle': ['warn', 'only-multiline'],
  'object-property-newline': ['off'],
  'semi': ['warn', 'always', {omitLastInOneLineBlock: true}],
  'spaced-comment': ['warn', 'always', {markers: [':', '::']}],
};

if (!PROD) {
  rules['no-debugger'] = ['off'];
}

module.exports = {
  extends: ['standard', 'plugin:import/errors', 'plugin:import/warnings',],
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules,
  env: {
    browser: true,
  },
};
