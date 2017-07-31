var webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        entry: "./index.js",
        output: {
            publicPath: '/',
            filename: "./build/bundle.js"
        },
        devtool: 'source-map',
        devServer: {
            contentBase: "./build",
            port: 3000
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["es2015", "stage-2"]
                        }
                    }
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "file-loader"
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                files: {
                    css: ['style.css'],
                    js: ["bundle.js"],
                }
            })
        ]
    }
    //export statement of CommonsJS module