const path = require('path')

const FileListPlugin = require('./plugins/fileListPlugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsonc$/,
        use: [
          {
            loader: 'jsonc-loader',
            options: {
              value: 'hi jsonc',
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'banner-loader',
            options: {
              banner: '@banner-loader',
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules', 'loaders'],
  },
  plugins: [new FileListPlugin({ title: 'file list plugin' })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: '8033',
    host: '0.0.0.0',
    overlay: {
      warngins: true,
      errors: true,
    },
    // overlay: true, // 在浏览器上显示编译错误信息
    // headers: {
    //   'X-foo': '123',
    // },
    // historyApiFallback: true, // 404 page ==> index.html
    // historyApiFallback: {
    //   // 自定义规则
    //   rewrites: [
    //     { from /^\/user/, to: '/user.html', }
    //   ]
    // },
    // proxy: {
    //   '^/api': {
    //     target: 'http://api.domain.com',
    // 	// secure: true, // https
    // 	changeOrigin: true, // 是否跨域
    // 	pathRewrite: {
    //       '^/api': '', // 重写路径
    // 	}
    //   }
    // },
    // hot: true,
    // inline: true,
  },
}
