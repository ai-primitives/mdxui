module.exports = {
  root: true,
  extends: [
    '@workspace/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
