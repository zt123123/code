const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: '/node_modules/',
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                exclude: '/node_modules/',
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}