const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    index: ['./src/index.js', './src/leaflet-idw.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
