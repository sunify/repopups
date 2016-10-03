const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Build for', process.env.API_SERVER_URL); //eslint-disable-line

module.exports = {
  entry: {
    index: [
      path.join(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
  },
  devtool: '#source-maps',
  module: {
    loaders: loaders(false),
  },
  postcss: [
    require('autoprefixer'),
  ],
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_SERVER_URL: JSON.stringify(process.env.API_SERVER_URL),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      title: 'Hero',
      hash: true,
      template: 'index-template.ejs',
    }),
  ],
};
