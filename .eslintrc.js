module.exports = {
    env: {
      node: true,
      es2021: true,
      mocha: true
    },
    extends: [
      'airbnb-base'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    globals: {
      browser: true,
      $: true,
      $$: true,
      expect: true
    },
    rules: {
      'no-console': 'off',
      'class-methods-use-this': 'off'
    }
  }