var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    liveReload: false,
    port: 9000,
    writeToDisk: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  }
};

