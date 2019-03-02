const path = require("path");
const merge = require('webpack-merge');//webpack合并插件

const webpackBase = require('./webpack.config.base');

module.exports = merge(webpackBase, {
    mode: 'development',
    output: {
        publicPath: '//localhost:3000/',
        path: path.join(__dirname, "../docs/dist"), //打包后的文件存放的地方
        filename: "[name]_[hash].js", //打包后输出文件的文件名
        chunkFilename: '[name]_[chunkhash].js',
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: [
					path.resolve(__dirname,'../node_modules')
				],
                use: ['babel-loader'],
            },
            {
                test: /\.(css|pcss|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
                ],
                exclude: [
					path.resolve(__dirname,'../node_modules')
				],
            },
        ]
    },
    devServer: {
        open: true,
        port: 3000,
        inline: true,
        publicPath: '/',
        contentBase: '../docs/dist',
    },
});
