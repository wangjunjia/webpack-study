const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  mode: 'development',
  entry: path.join(__dirname, './src/app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader', 'html-minify-loader']
      }
    ]
  },
  resolveLoader: {
    modules: [path.join(__dirname, './loader'), 'node_modules']
  },
  plugins: [
    new HtmlWebapckPlugin(),
    new HotModuleReplacementPlugin()
  ]
}