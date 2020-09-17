class FirstPlugin {
    apply(complier) {
        complier.hooks.done.tap('this is my first Plugin', (stats) => {
            console.log('Listen Echo')
        })
    }
}


module.exports = FirstPlugin