var webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './app.js'
    },
    output: {
        path: "./out/"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },    
    module: {
        loaders: [
            { test: /\.ts/, loaders: ['ts-loader']},
            { test: /\.css/, loaders: ['style-loader', 'css-loader']},
            { test: /\.less/, loaders: ['style-loader', 'css-loader', 'less-loader']},
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};