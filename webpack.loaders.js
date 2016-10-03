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
  { test: /\.png$/, loader: 'url?limit=10000' },
  { test: /\.gif$/, loader: 'url?limit=10000' },
  { test: /\.jpg$/, loader: 'url?limit=10000' },
];
