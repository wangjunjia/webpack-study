
# webpack lifecycle

初始化配置对象，创建 compiler 对象
实例化插件，调用插件的 apply 方法，挂载插件的监听
从入口文件执行编译，按照文件类型调用相应的loader，在合适的时间调用plugin执行，并查找各个模块的依赖
将编译后的代码组装成一个个代码块（chunk），并安依赖和配置确定输出内容
根据output把文件输出到对象的目录下

# loader 

this.context：当前处理文件的所在目录，假如当前 Loader 处理的文件是 /src/main.js，则 this.context 就等于 /src。
this.resource：当前处理文件的完整请求路径，包括 querystring，例如 /src/main.js?name=1。
this.resourcePath：当前处理文件的路径，例如 /src/main.js。
this.resourceQuery：当前处理文件的 querystring。
this.target：等于 Webpack 配置中的 Target，详情见 2-7其它配置项-Target。
this.loadModule：当 Loader 在处理一个文件时，如果依赖其它文件的处理结果才能得出当前文件的结果时， 就可以通过 this.loadModule(request: string, callback: function(err, source, sourceMap, module)) 去获得 request 对应文件的处理结果。
this.resolve：像 require 语句一样获得指定文件的完整路径，使用方法为 resolve(context: string, request: string, callback: function(err, result: string))。
this.addDependency：给当前处理文件添加其依赖的文件，以便再其依赖的文件发生变化时，会重新调用 Loader 处理该文件。使用方法为 addDependency(file: string)。
this.addContextDependency：和 addDependency 类似，但 addContextDependency 是把整个目录加入到当前正在处理文件的依赖中。使用方法为 addContextDependency(directory: string)。
this.clearDependencies：清除当前正在处理文件的所有依赖，使用方法为 clearDependencies()。
this.emitFile：输出一个文件，使用方法为 emitFile(name: string, content: Buffer|string, sourceMap: {…})

# plugin 加载机制

webpack 执行 new PluginName(options) 初始化插件并获取实例
初始化 complier 对象，调用插件实例的 apply(complier) 给插件传入 complier 对象
插件实例获取 complier ，通过 complier 监听 webpack 广播的事件，通过 complier 操作 webpack

compiler对象包含了 Webpack 环境所有的的配置信息。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
compilation对象包含了当前的模块资源、编译生成资源、变化的文件等。当运行webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

compiler和compilation的区别在于：

compiler代表了整个webpack从启动到关闭的生命周期，而compilation只是代表了一次新的编译过程
compiler和compilation暴露出许多钩子，我们可以根据实际需求的场景进行自定义处理







# QA

##  inline, hot, hotOnly 区别

devServer 默认代码更新后刷新整个网页
hot: true 热替换即新模块代码替换旧模块代码, 自动启用 HotModuleReplacementPlugin 插件

hotOnly: 如果热替换失败，控制台上输出提示信息, hot 则换刷新整个页面
inline: true 处理更新的脚本插入到 bundle 文件中，并且浏览器控制台输出更新信息。false 通过 iframe 控制开发的页面

推荐 webpack-dev-server --inline --hot

使用上的区别：

hot 需要在 入口js 中添加

```
if (module.hot) {
  module.hot.accept()
}
```



























