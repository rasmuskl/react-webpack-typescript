
module.exports = {
    entry: {
        bundle: './app.js'
    },
    module: {
        loaders: [
            { test: /\.css/, loaders: ['style-loader', 'css-loader']}
        ]
    }
};