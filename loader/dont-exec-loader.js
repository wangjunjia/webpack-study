const loaderUtils = require('loader-utils')

module.exports = function(source, map, meta) {
  console.log('dont-exec loader')
  if (this.cacheable) {
    this.cacheable()
  }
  return source
}
module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  console.log('dont-exec pitch -> ')
  return `require('${remainingRequest}');`
};