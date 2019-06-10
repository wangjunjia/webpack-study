const loaderUtils = require('loader-utils')

/**
 * loader 真正执行的方法
 * source: 需要处理的资源，类型依据 raw: true（buffer）false（string utf8）
 * map: source map
 * mate: 元数据
 */
module.exports = function(source, map, meta) {
  if (this.cacheable) {
    this.cacheable()
  }

  const callback = this.async()
  const opts = loaderUtils.getOptions(this)
  console.log('loader -> ', opts, source, map, meta)
  setTimeout(() => {
    // 第一个参数必须是 Error 或者 null
    // 第二个参数是一个 string 或者 Buffer。
    // 可选的：第三个参数必须是一个可以被这个模块解析的 source map。
    // 可选的：第四个选项，会被 webpack 忽略，可以是任何东西（例如一些元数据）。
    this.callback(null, source, map, meta)
  }, 10)
  return; // 当调用 callback() 时总是返回 undefined
}
// raw: 控制传入 loader 的 source 类型。 
// true buffer
// false string utf8
module.exports.raw = false

/**
 * 洋葱圈模型: 由外圈到内圈 执行 pitch，由内圈到外圈 执行 loader
 * remainingRequest: loader 路径
 * data: 传递到 loader 的 this.data
 * 如果 return 一个结果会 跳过 后面的 loader ？？？这个有问题没有搞懂
 * 
 * loader: A -> B -> C 
 * A.pitch -> B.pitch -> C.pitch -> C<loader> -> B<loader> -> A<loader>
 */
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('pitch -> ', remainingRequest, ' 1', precedingRequest, ' 2', data, ' 3')
};