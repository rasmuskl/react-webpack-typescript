/// <binding />
"use strict";

const webpack = require("webpack");
const path = require("path");
const process = require("process");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;
const isHotMode = process.argv.find((a) => { return a.indexOf("webpack-dev-server") >= 0; }) && process.argv.find((a) => { return a.indexOf("--hot") >= 0; });

const hotPort = 9090;

let config = {
    entry: [
        "./app/index"
    ],
    output: {
        path: path.resolve("./dist"),
        filename: "[name].js",
        sourceMapFilename: "[file].map",
        publicPath: "/dist/"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ["ts-loader"] }
        ]
    },
    ts: {
        compilerOptions: {
            noEmit: false
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "app.html",
            template: "./app/index.html",
            minify: { removeComments: true }
        })
    ]
};

if (isHotMode) {
    config.entry.unshift("webpack-dev-server/client?http://localhost:" + hotPort, "webpack/hot/dev-server");
    config.output.publicPath = "http://localhost:" + hotPort + "/dist/";
    config.module.loaders.find((l) => { return l.test.toString() === /\.tsx?$/.toString() }).loaders.unshift("react-hot-loader");
}

if (isDevelopment) {
    config.module.loaders.push({ test: /\.css$/, loaders: ["style", "css" ] });
    config.module.loaders.push({ test: /\.less$/, loaders: ["style", "css", "less"] });
    config.module.loaders.push({ test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?.+)?(#.+)?$/, loaders: ["url-loader?limit=100000"] });

    config.devServer = {
        publicPath: "http://localhost:" + hotPort + "/dist/",
        outputPath: path.resolve("./dist"),
        port: hotPort
    };

    config.plugins.push(new WriteFilePlugin({ test: /\.html/ }));
}

if (isProduction) {
    config.output.filename = "[name].[chunkhash].js";

    config.module.loaders.push({ test: /\.css$/, loader: ExtractTextPlugin.extract("style", ["css"]) });
    config.module.loaders.push({ test: /\.less$/, loader: ExtractTextPlugin.extract("style", ["css", "less"]) });

    config.plugins.push(new ExtractTextPlugin("[name].[contenthash].css", { allChunks: true }));
    config.plugins.push(new webpack.DefinePlugin({ "process.env": { "NODE_ENV": JSON.stringify("production") } }));
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = config;