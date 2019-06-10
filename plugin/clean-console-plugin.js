
class CleanConsolePlugin {
  
  constructor(options) {
    let defaultOptions = {
      syntax: [
        'console', 
        'window.console'
      ],
      methods: [
        'log', 
        'info', 
        'warn', 
        'error',
        'assert',
        'count',
        'clear',
        'group' ,
        'groupEnd',
        'groupCollapsed',
        'trace' ,
        'debug', 
        'dir' ,
        'dirxml', 
        'profile',
        'profileEnd' ,
        'time',
        'timeEnd',
        'timeStamp' ,
        'table',
        'exception'
      ],
      ignore: []
    }
    this.opts = Object.assign(defaultOptions, options)
    let ignoreArr = options.ignore
    if (ignoreArr) {
      this.opts.methods = this.opts.methods.filter(it => !ignoreArr.includes(it))
    }
    let { syntax, methods, ignore } = this.opts
    this.opts.regExp = new RegExp(`(${syntax.join('|')}).(?:${methods.join('|')}\.*;?)`, 'gi')
  }

  apply(compiler) {
    const { regExp } = this.opts
    compiler.hooks.compilation.tap("CleanConsolePlugin", compilation => {
			compilation.hooks.optimizeChunkAssets.tap("CleanConsolePlugin", chunks => {
        for (const chunk of chunks) {
          for (const filename of chunk.files) {
            let source = compilation.assets[filename].source()
            source = source.replace(regExp, () => source.replaceWith || '')
            compilation.assets[filename] = {
              source: () => source,
              size: () => source.length
            }
          }
        }
      })
    })
  }
}

module.exports = CleanConsolePlugin