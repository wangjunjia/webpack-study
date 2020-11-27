const { getOptions } = require('loader-utils')

module.exports = function(source) {
  const options = getOptions(this)
  return `module.exports = '${options.banner || ''}\\n${source.trim()}'`
}
