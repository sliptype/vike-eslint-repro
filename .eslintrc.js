module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: [
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
    ],
    plugins: [
      '@typescript-eslint',
      'import'
    ],
    settings: {
        'import/resolver': {
            alias: {}
        },
    },
  }
  