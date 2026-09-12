const { selfpentestWebpackPlugin } = require("@selfpentest/webpack-plugin");
const LavaMoatPlugin = require("@lavamoat/webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "source-map",
  plugins: [
    selfpentestWebpackPlugin(),
    new LavaMoatPlugin({
      generatePolicy: true,
      scuttleGlobalThis: {
        enabled: true,
        exceptions: [],
      },
    }),
  ],
};
