const loaderUtils = require('loader-utils')

module.exports = function(source, map, meta) {
  console.log('abc2js loader')
  if (this.cacheable) {
    this.cacheable()
  }
  const callback = this.async()
  const _data = this.data
  const opts = loaderUtils.getOptions(this)
  setTimeout(() => {
    let result = source.replace(new RegExp(opts.key, 'g'), opts.value)
    result += `\n${_data.message}`
    callback(null, result, map, meta)
  }, 10)
  return;
}

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('abc2js pitch -> ')
  data.message = `console.log('message from pitch , abc to js');`
};