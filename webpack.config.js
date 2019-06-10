const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/app.xyz'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.xyz$/,
        use: [
          {
            loader: 'abc2js-loader',
            options: {
              key: '_abc_',
              value: 'var'
            }
          },
          {
            loader: 'xyz2abc-loader',
            options: {
              key: '__xyz__',
              value: '_abc_'
            }
          },
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, './loader'), 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}