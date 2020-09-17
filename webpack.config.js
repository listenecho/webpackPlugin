const MyFirstPlugin = require('./plugins/firstPlugin')
const FileListPlugin = require('./plugins/fileListPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RemoveLogPlugin = require('./plugins/removeConsoleLog')
const MyPlugin = require('./plugins/modifyHtmlWebpackPlugin')

const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve('src', 'index.js')
    },
    plugins: [
        // new MyFirstPlugin(),
        // new FileListPlugin(),
        new HtmlWebpackPlugin(),
        //   new RemoveLogPlugin()
        new MyPlugin({ options: '' })
      
      ]
}