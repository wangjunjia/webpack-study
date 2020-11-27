const loaderUtils = require('loader-utils')

module.exports = function(source, sourceMap, meta) {
  this.cacheable && this.cacheable()

  const callback = this.async()

  const options = loaderUtils.getOptions(this)

  const { value } = options

  const result = source.replace('@jsonc', value)

  setTimeout(() => {
    callback(null, `module.exports = ${result}`, sourceMap, meta)
  }, 100)
}

// module.exports.raw = true // 设置当前 loader 为 raw loader, source 入参为 buffer

/*
// 直接指定 loader 路径
let webpackConfig = {
  module: {
    rules: [{
      test: /\.jsonc$/,
      use: [{
        loader: path.resolve(__dirname, 'loaders/jsonc-loader.js'),
    	options: {
          value: 'hi jsonc loader',
    	},
      }]
    }]
  }
}

*/

/*

// 直接 loader 目录，让 webpack 自己查找
let webpackConfig = {
  module: {
    rules: [{
      test: /\.jsonc$/,
      use: [{
        loader: 'jsonc-loader',
    	options: {
          value: 'hi jsonc loader',
    	},
      }]
    }]
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
}
*/

/*
第一个 loader


*/
