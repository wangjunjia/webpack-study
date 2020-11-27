class FileListPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler) {
    // tap tapAsync tapPromise
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      var fileList = 'In this build: \n\n'
      for (let filename in compilation.assets) {
        fileList += `- ${filename} \n`
      }

      compilation.assets['fileList.md'] = {
        source() {
          return fileList
        },
        size() {
          return fileList.length
        },
      }
      callback()
    })
  }
}

module.exports = FileListPlugin
