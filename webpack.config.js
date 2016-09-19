var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./public/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            }
        ]
    },
    plugins: [
            new ExtractTextPlugin("[name].css")
    ]
};
