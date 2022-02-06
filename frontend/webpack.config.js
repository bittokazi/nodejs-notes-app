const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "./[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin([
      { from: "./src/assets/images", to: "./assets/images" },
      { from: "./src/assets/js", to: "./assets/js" },
      { from: "./src/assets/login_page", to: "./assets/login_page" },
      { from: "./src/assets/dashboard", to: "./assets/dashboard" },
    ]),
    new webpack.DefinePlugin({
      "process.env.DEPLOY_ENV": JSON.stringify(process.env.DEPLOY_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images",
              publicPath: "/assets/images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts",
              publicPath: "/assets/fonts",
            },
          },
        ],
      },
      {
        test: /\.mustache$/,
        exclude: /node_modules/,
        use: "raw-loader",
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  node: {
    fs: "empty",
  },
};
