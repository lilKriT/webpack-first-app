const path = require("path");

// This is a config I created
module.exports = {
  // Entry point to the app
  entry: "./src/index.js",
  output: {
    filename: "main.js", // main.js is default anyway
    path: path.resolve(__dirname, "dist"),
  },
};
