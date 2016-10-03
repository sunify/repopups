const webpack = require('webpack');
const config = require('./webpack.config.dev');
const DevServer = require('webpack-dev-server');

const server = new DevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Listen webpack-dev-server on 3000'); //eslint-disable-line
});
