const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is a config I created
module.exports = (env) => {
  return {
    mode: "production",
    entry: {
      index: "./src/index.js",
    },
    devtool: "source-map",
    // devServer: {
    //   static: "./dist",
    //   hot: true,
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Production",
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
      usedExports: true,
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
