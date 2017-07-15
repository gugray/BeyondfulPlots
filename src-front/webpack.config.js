var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js',
    sdk: "./sdk/sdk.js",
    pluginx: './pluginx/main.js'
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, "dist")
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
