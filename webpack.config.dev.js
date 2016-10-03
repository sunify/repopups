const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.join(__dirname, 'src/index.js'),
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:3000/build',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
  },
  devtool: '#eval',
  module: {
    loaders: loaders, // eslint-disable-line object-shorthand
  },
  postcss: [
    require('autoprefixer'),
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_SERVER_URL: JSON.stringify(process.env.API_SERVER_URL),
      },
    }),
  ],
};
