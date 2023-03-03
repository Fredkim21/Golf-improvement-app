const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devServer: {
        static: {
          directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 8000,
        proxy: {
          "/": "http://localhost:3000",
        },
      },
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html' 
        }),
        new ReactRefreshWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: [/\.css$/i],
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          './scenes/login': path.resolve(__dirname, 'src/scenes/login.jsx'),
          './scenes/signup': path.resolve(__dirname, 'src/scenes/signup.jsx'),
          './src/index.html': path.resolve(__dirname, 'public/index.html')
        }
      },   
}