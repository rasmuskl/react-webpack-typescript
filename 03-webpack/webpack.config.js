
module.exports = {
    entry: {
        bundle: './app.ts'
    },
    output: {
        path: "./out/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.ts/, loaders: ['ts-loader']},
            { test: /\.css/, loaders: ['style-loader', 'css-loader']},
            { test: /\.less/, loaders: ['style-loader', 'css-loader', 'less-loader']},
        ]
    }
};