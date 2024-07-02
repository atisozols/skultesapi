module.exports = {
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:prettier/recommended', // Add Prettier configuration
  ],
  plugins: ['node', 'prettier'], // Add Prettier plugin
  env: {
    node: true,
  },
  rules: {
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],
  },
};
