module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
    "no-plusplus": [2, { allowForLoopAfterthoughts: true }],
    "no-alert": "off",
    eqeqeq: 1,
    "consistent-return": "warn",
    "no-useless-escape": "warn",
    "no-param-reassign": "warn",
    "import/extensions": "warn",
  },
  plugins: ["jest"],
};
