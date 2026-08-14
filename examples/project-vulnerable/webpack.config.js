const { selfpentestWebpackPlugin } = require('@selfpentest/webpack-plugin');

module.exports = {
  entry: './index.js',
  plugins: [
    selfpentestWebpackPlugin(),
  ],
};
