module.exports = {
  extends: ['airbnb-base', 'plugin:node/recommended'],
  plugins: ['node'],
  env: {
    node: true,
  },
  rules: {
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
  },
};
