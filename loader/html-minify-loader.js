const Minimize = require('minimize')
const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const callback = this.async()
  if (this.cacheable) {
    this.cacheable()
  }

  const opts = loaderUtils.getOptions(this)
  const minimize = new Minimize(opts)
  minimize.parse(source, callback)
}