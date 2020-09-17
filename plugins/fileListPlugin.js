const fs = require('fs')

class FileListPlugin {
    constructor(option = {}) {
        this.fileName = option.fileName ? option.fileName : 'FILE_LIST.md'
    }

    apply(complier) {
        //emit	AsyncSeriesHook	在生成文件到output目录之前执行，回调参数： compilation
        complier.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // console.log(compilation.hooks.htmlWebpackPluginAfterHtmlProcessing)
            // console.log(complier.options.plugins)
            console.log(compilation.chunks, compilation.chunkGroups)
            let content = `## files list\n\n\n`
            for(let key in compilation.assets) {
                content += `#### --${key}\n`
            }
            compilation.assets[this.fileName] = {
                source: () => content,
                size: () => content.length
            }
            callback()  
        })
    }
}

module.exports = FileListPlugin