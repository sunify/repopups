const path = require('path');

const cssLoader = 'css-loader!postcss-loader';

module.exports = [
  { test: /\.css$/,
    loader: `style-loader!${cssLoader}`,
  },
  { test: /\.js$/,
    exclude: /node_modules/,
    include: [path.join(__dirname, 'src')],
    loader: 'babel',
  },
  { test: /\.woff2$/, loader: 'file' },
  { test: /\.woff$/, loader: 'file' },
  { test: /\.png$/, loader: 'file' },
  { test: /\.gif$/, loader: 'file' },
  { test: /\.jpg$/, loader: 'file' },
];
