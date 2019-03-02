const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry: {
        'doc': path.join(__dirname, "../docs/views/doc.js"), //后台入口文件
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            packages: path.join(__dirname, '../packages'),
            markdown: path.join(__dirname, '../docs/markdown'),
            components: path.join(__dirname, '../docs/views/components')
        }
    },
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
