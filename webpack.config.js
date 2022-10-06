const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is a config I created
module.exports = {
  mode: "development",
  entry: {
    index: { import: "./src/index.js", dependOn: "shared" },
    print: { import: "./src/print.js", dependOn: "shared" },
    another: { import: "./src/another-module.js", dependOn: "shared" },
    shared: "lodash",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
