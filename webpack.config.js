const path = require('path')
const CleanConsolePlugin = require('./plugin/clean-console-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanConsolePlugin({
      // ignore: ['group', 'groupEnd', 'info']
    })
  ]
}