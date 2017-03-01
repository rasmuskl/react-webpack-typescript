var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app.js'
    },
    output: {
        path: "./out/"
    },
    resolve: {
        extentions: ['', '.js']
    },
    module: {
        loaders: []
    },
    plugins: []
};