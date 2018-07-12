const path = require('path');
const pluginExtract = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        home: path.resolve(__dirname,'./src/js/index.js'),
        precios: path.resolve(__dirname,'./src/js/precios.js'),
        contacto: path.resolve(__dirname,'./src/js/contacto.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'

    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [pluginExtract.loader, 'css-loader']
        }]
    },
    plugins: [
        new pluginExtract({
            filename: 'css/[name].css'
        })
    ]
}