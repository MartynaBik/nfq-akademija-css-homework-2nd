const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                loader: ["style-loader","css-loader?sourceMap","sass-loader?sourceMap"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                },
            },
        }
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject : "body"
        })
    ]
};
