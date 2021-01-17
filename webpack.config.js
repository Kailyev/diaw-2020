const { dirname } = require('path')
const path = require('path')

module.exports = {
    //1.Especificando el archivo index e entrada
    entry: path.join(__dirname, './src/index.js'),
    //2.Especificar el archivo de salida
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    //3.Folder donde servira
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        port:4040,
        compress: true,
        publicPath:'/'
    }
}