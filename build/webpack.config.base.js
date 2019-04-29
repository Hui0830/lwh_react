const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HappyPack = require('happypack');

module.exports = {
    entry: {
        'doc': path.join(__dirname, "../docs/views/doc.js"), //后台入口文件
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            packages: path.join(__dirname, '../packages'),
            markdown: path.join(__dirname, '../docs/markdown'),
            components: path.join(__dirname, '../docs/views/components'),
            lwh_react: path.join(__dirname, '../packages/index.js')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.js|\.jsx$/,
            //     exclude: [
			// 		path.resolve(__dirname,'../node_modules')
			// 	],
            //     use: ['babel-loader?cacheDirectory'],
            // },
            {
				test: /\.(js|jsx)$/,
				use: ['happypack/loader?id=babel'],
				exclude: /(node_modules)/,
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
				test: /\.(png|jpg|jpeg|svg|ico)$/i,
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
        // happypack并行处理
		new HappyPack({
			// 用唯一ID来代表当前HappyPack是用来处理一类特定文件的，与rules中的use对应
			id: 'babel',
			loaders: ['babel-loader?cacheDirectory'],
			//threadPool: happyThreadPool
		}),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            chunks: ['manifest', 'vendor','doc'],
            filename: 'index.html',
            template: path.join(__dirname, "../docs/views/doc.html"),
            inject: 'body',
			favicon:  path.join(__dirname,'../favicon.ico'),
        }),
        new HtmlWebpackHarddiskPlugin()
    ],
};
