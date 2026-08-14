const pentestPlugin = require("@selfpentest/eslint-pentest-plugin");

module.exports = [
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  pentestPlugin.configs.recommended,
];
