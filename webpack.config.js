var webpack = require("webpack")
var path = require("path")
var BUILD_DIR = path.join(__dirname, "build")
var APP_DIR = path.join(__dirname, "src")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        entry: APP_DIR + "/index.js",
        output: {
            path: BUILD_DIR,
            publicPath: '/',
            filename: "bundle.js"
        },
        devtool: 'source-map',
        devServer: {
            contentBase: BUILD_DIR,
            port: 3000
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: APP_DIR,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-2"]
                    }
                }
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: APP_DIR + '/index.html'
            })
        ]
    }
    //export statement of CommonsJS module