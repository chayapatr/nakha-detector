module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_module/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};