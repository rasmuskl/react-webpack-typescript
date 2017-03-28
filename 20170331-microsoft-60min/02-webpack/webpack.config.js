const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app.ts'
    },
    output: {
        path: "./out/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: []
    },
    plugins: []
};