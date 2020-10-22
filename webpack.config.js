const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    watch: true,
    entry:  {
        'app': './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}