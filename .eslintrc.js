module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'prettier', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Custom rules
  }
};