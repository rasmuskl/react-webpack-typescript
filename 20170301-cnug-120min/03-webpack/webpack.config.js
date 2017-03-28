var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app.js'
    },
    output: {
        path: "./out/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: []
    },
    plugins: []
};