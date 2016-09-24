module.exports = {
    entry: {
        'test': "./test.js",
        'bundle': ["./public/main.js"]
    },
    output: {
        path: "./public/built",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
};
