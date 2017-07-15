var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js',
    sdk: "./sdk/sdk.js",
    pluginx: './pluginx/main.js'
  },

  output: {
    filename: 'bundle-[name].js',
    path: path.resolve(__dirname, "dist")
  },

  devtool: 'source-map',

  devServer:{
    contentBase: 'public'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
    ]
  }
}
