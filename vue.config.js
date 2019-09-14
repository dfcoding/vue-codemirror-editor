const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    publicPath: '/vue-codemirror-editor/',
    outputDir: 'page',
    pages: {
        index: {
            entry: 'example/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'vue-codemirror-editor',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                'example': resolve('example'),
                'vue-codemirror-editor': resolve('src'),
            }
        }
    }

}
