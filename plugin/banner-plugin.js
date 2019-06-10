const { ConcatSource } = require("webpack-sources");

class BannerPlugin {

  constructor(options) {
    this.opts = options
  }

  apply(compiler) {
    const opts = this.opts
    compiler.hooks.compilation.tap("BannerPlugin", compilation => {
			compilation.hooks.optimizeChunkAssets.tap("BannerPlugin", chunks => {
        for (const chunk of chunks) {
          // chunk entry file
          if (!chunk.canBeInitial()) {
            continue;
          }

          for (const file of chunk.files) {
            let comment = `/**\n  ${this.opts.banner}\n*/`
            compilation.assets[file] = new ConcatSource(
              comment, 
              "\n", 
              compilation.assets[file])
          }
        }
      })
    })
  }
}

module.exports = BannerPlugin