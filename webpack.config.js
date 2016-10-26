var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        'test': "./test.js",
        'bundle': ["./public/index.js"],
    },
    output: {
        path: "./public/built",
        filename: "[name].js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.xml$/,
                exclude: /node_modules/,
                loader: 'fest-loader',
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("style.css",  {allChunks: true})
    ]
};
