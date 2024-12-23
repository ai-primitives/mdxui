module.exports = {
  root: true,
  extends: [
    '@mdxui/eslint-config',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
