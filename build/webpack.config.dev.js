var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    devServer: {
        open: true,
        port: 3000,
        inline: true,
        publicPath: '/',
        contentBase: '../docs/dist',
    },
    mode: 'development',
    entry: {
        'doc': path.join(__dirname, "../docs/views/doc.js"), //后台入口文件
    },
    output: {
        publicPath: '//localhost:3000/',
        path: path.join(__dirname, "../docs/dist"), //打包后的文件存放的地方
        filename: "[name]_[hash].js", //打包后输出文件的文件名
        chunkFilename: '[name]_[chunkhash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            packages: path.join(__dirname, '../packages'),
            markdown: path.join(__dirname, '../docs/markdown'),
            components: path.join(__dirname, '../docs/views/components')
        }
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
            {
                test: /\.md$/,
                loader: 'babel-loader!react-markdown-loader',
                exclude: [
					path.resolve(__dirname,'../node_modules')
				],
            },
            {
                test: /\.(png|jpg|jpge)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                  }
                ],
                exclude: [
					path.resolve(__dirname,'../node_modules')
				],
            },
            {
				test: /\.(png|jpg|jpeg|gif|ttf|eot|woff|svg|woff2|swf)$/i,
				use: [
					{
						loader: 'file-loader',
						query: {
							name:'[path][name].[ext]'
						}
					},
                ],
                exclude: [
					path.resolve(__dirname,'../node_modules')
				],
			}
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
              postcss: function () {
                return [precss, autoprefixer];
              },
            }
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            chunks: ['doc'],
            filename: 'index.html',
            template: path.join(__dirname, "../docs/views/doc.html"),
            inject: 'body',
			favicon: './favicon.ico',
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
};
