const loaderUtils = require('loader-utils')

module.exports = function(source, map, meta) {
  console.log('xyz2abc loader')
  if (this.cacheable) {
    this.cacheable()
  }
  const callback = this.async()
  const opts = loaderUtils.getOptions(this)
  setTimeout(() => {
    let result = source.replace(new RegExp(opts.key, 'g'), opts.value)
    callback(null, result, map, meta)
  }, 0)
  return;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('xyz2abc pitch -> ')
};