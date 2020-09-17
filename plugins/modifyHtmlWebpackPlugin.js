// If your plugin is direct dependent to the html webpack plugin:
const HtmlWebpackPlugin = require('html-webpack-plugin');
// If your plugin is using html-webpack-plugin as an optional dependency
// you can use https://github.com/tallesl/node-safe-require instead:

class MyPlugin {
  apply (compiler) {
    // HtmlWebpackPlugin监听的是在输出阶段,确认好那些文件要写入到output中,在写入文件之间的生命周期
    // 所以在调用他的附加组件一定是在 emit 之间的生命周期去做处理
    // compilation是在编译阶段,每当检测到文件变化就生成新的compilation,
    // compilation 包含了当前模块资源,编译生成资源,变化的文件, 同样也提供了许多事件回调
    compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
      console.log('The compiler is starting a new compilation...')

      // Static Plugin interface |compilation |HOOK NAME | register listener 
      HtmlWebpackPlugin.getHooks(compilation, 'MyPlugin').beforeEmit.tapAsync(
        'MyPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          console.log(data)
          // Manipulate the content
          data.html += 'The'
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = MyPlugin