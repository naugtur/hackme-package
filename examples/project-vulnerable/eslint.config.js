const pentestPlugin = require("@selfpentest/eslint-pentest-plugin");

module.exports = [
  {
    files: ["*.js"],
    rules: {
      "no-unused-vars": "warn",
    },
  },
  pentestPlugin.configs.recommended,
];
