const path = require("path");

// This is a config I created
module.exports = {
  // Entry point to the app
  entry: "./src/index.js",
  output: {
    filename: "bundle.js", // main.js is default
    path: path.resolve(__dirname, "dist"),
  },
  // This is for adding css
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    ],
  },
};
