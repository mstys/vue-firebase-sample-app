module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Allow shadowing for Vuex Modules (The pattern requires it.)
    'no-shadow': 0,

    // Allow absolute imports in any order (because we're too far in and don't have time to correct)
    'import/first': 0,

    // Allow import w/o extension, because we have Webpack (a Vue-CLI convention)
    'import/extensions': 0,

    // Don't Warn for plus-plus
    'no-plusplus': 0,

    'comma-dangle': 0,
    'no-param-reassign': 0,
    'no-useless-return': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
