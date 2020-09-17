const fs = require('fs')
class RemoveLogPlugin {
    constructor(option) { }
    apply(compiler) {
        compiler.hooks.done.tap('RemoveLogPlugin', stats => {
            const { path } = stats.compilation.options.output
            const filename = 'index.js'
            const filePath = require('path').join(path, filename)
            try {
               const fileContent = fs.readFileSync(filePath).toString()
               const regExp = /console.log\(.*?\)/g
               fs.writeFileSync(filePath,fileContent.replace(regExp, "") )
            } catch (error) {
                console.log(error)
            }
      
        })
    }
}

module.exports = RemoveLogPlugin

