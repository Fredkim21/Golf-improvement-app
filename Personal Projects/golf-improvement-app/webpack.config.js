const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {NODE_ENV} = process.env;
console.log('\n the NODE_ENV is ', NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: `./src/index.js`,

  output: {
    path: path.resolve(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: '/',
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'public'),
      // match the output 'publicPath'
      publicPath: '/',
    },

    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
  ,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.bundle.js',
      template: 'src/index.html',
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
    ],
  },

  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
    fallback: {
      path: require.resolve("path-browserify"),
    },
    fallback: {
      "util": require.resolve("util/"),
      "fs": false
    },
  },
};
