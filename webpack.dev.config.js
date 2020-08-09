const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");

const defaultInclude = path.resolve(__dirname, "src/app");

module.exports = {
  entry: defaultInclude,
  target: "electron-renderer",
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        include: defaultInclude,
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: "babel-loader" }],
        include: defaultInclude,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
        include: defaultInclude,
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" },
        ],
        include: defaultInclude,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    before() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(0))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
};
