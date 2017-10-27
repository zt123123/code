const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('static/css/[name]-[hash:8].css');

const extractLESS = new ExtractTextPlugin('static/css/[name]-[hash:8].css');

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        filename: "bundle-[hash:8].js",
        path: path.resolve(__dirname, "build")
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        require('autoprefixer'),
        new webpack.BannerPlugin('249812928@qq.com，版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tmpl.html"
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        extractCSS,
        extractLESS
    ]
};