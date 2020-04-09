module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  }
}
