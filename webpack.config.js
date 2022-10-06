const path = require("path");
// This is so index can import dynamic file names
const HtmlWebpackPlugin = require("html-webpack-plugin");

// This is a config I created
module.exports = {
  // Entry point to the app
  entry: { index: "./src/index.js", print: "./src/print.js" }, // this way there's multiple entry points
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    // this will generate multitple outputs
    filename: "[name].bundle.js", // main.js is default
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // This is for adding css
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: "asset/resource",
  //     },
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //       type: "asset/resource",
  //     },
  //     {
  //       test: /\.(csv|tsv)$/i,
  //       use: ["csv-loader"],
  //     },
  //     {
  //       test: /\.xml$/i,
  //       use: ["xml-loader"],
  //     },
  //   ],
  // },
};
