const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const { template } = require("lodash");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// eslint-disable-next-line prefer-destructuring
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    main: resolve(__dirname, "src/main.js"),
    // drawYmap: resolve(__dirname, 'src/drawYmap.js'),
  },
  output: {
    filename: "[name].js",
    path: resolve(`${__dirname}/dist`),
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: NODE_ENV === "production" ? "hidden-source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png)$/i,
        type: "asset/resource",
        generator: {
          filename: `./images/[contenthash][ext]`,
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  mode: NODE_ENV === "production" ? "production" : "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    client: {
      logging: "info",
    },
  },
};
