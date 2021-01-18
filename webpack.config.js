const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

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
        port:4045,
        compress: true,
        publicPath:'/'
    },
    module : {
        rules : [
            {
                test: /\.(js)$/,
                exclude:/node_modules/,
                use : ['babel-loader']
            },
        ]
    },
    plugins:[new ESLintPlugin()]
}