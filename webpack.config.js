const path = require('path')
const BannerPlugin = require('./plugin/banner-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new BannerPlugin({
      banner: `Hello Plugin`
    })
  ]
}