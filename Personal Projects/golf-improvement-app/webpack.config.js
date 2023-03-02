const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { node } = require("prop-types");

const { NODE_ENV } = process.env;
console.log("\n the NODE_ENV is ", NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV || "development",

  entry: `./src/index.js`,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  devServer: {
    compress: true,
    port: 8000,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, "dist"),
      // match the output 'publicPath'
      publicPath: "/",
    },

    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.bundle.js",
      template: "src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              {
                tag: "img",
                attribute: "data-src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "link",
                attribute: "href",
                type: "src",
              },
            ],
          },
        },
      },
    ],
  },

  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx"],
    fallback: {},
    fallback: {
      util: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      crypto: false,
      assert: false,
      buffer: false,
      process: false,
      os: false,
      url: false,
      stream: false,
      constants: false,
      path: false,
      querystring: false,
      timers: false,
    },
  },
};
