// webpack.config.js

const path = require('path')
const Terser = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bound.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false,
        minimizer: [
            new Terser({
                test: /\.js(\?.*)?$/i
            })
        ]
    }
}

