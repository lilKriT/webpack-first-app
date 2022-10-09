const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is a config I created
module.exports = (env) => {
  // You can use env variables here, like:
  // console.log(env.myvar);

  return {
    mode: "development",
    entry: {
      index: "./src/index.js",
      // print: "./src/print.js",
    },
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hot Module Replacement",
      }),
    ],
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  };
};
