const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// optimizeCssPlugin CSS文件压缩插件
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge'),//webpack合并插件
    CompressionPlugin = require("compression-webpack-plugin"),
    ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'),//并行压缩js
    HappyPack = require('happypack');
const webpackBase = require('./webpack.config.base');

const extractSCSS = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
	chunkFilename: 'css/[name]_[contenthash:8].css',
    fallback:'style-loader'
});

module.exports = merge(webpackBase, {
    mode: 'production',
    output: {
        publicPath: './',
        path: path.join(__dirname, '../docs/dist'), // 打包后的文件存放的地方
        filename: "js/[name].[chunkhash:8].js",
		chunkFilename: "js/[name]-[id].[chunkhash:8].js",
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,'happypack/loader?id=css'],
                exclude: path.resolve(__dirname,' ../node_modules'),
            },
        ],
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },

        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common',
                    minChunks: 2,
                    minSize: 0,
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: "vendor",
                    priority: 10,
                    enforce: true,
                }
            }
        },
        minimizer: [
			new ParallelUglifyPlugin({
				cacheDir: '.cache/', //缓存压缩
				uglifyJS:{
					output: {
						 // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
						beautify: false,
						 //是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
						comments: false
					},
					compress: {
						//是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出
						warnings: false,
						//是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
						drop_console: true,
						//是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 1, 默认为否
                        collapse_vars: true,
                        // 提取出现多次但是没有定义成变量去引用的静态值
                        reduce_vars:true
					}
				},
			}),
		]
    },
    plugins: [
        extractSCSS,
        new HappyPack({
			// 用唯一ID来代表当前HappyPack是用来处理一类特定文件的，与rules中的use对应
			id: 'css',
			loaders: [
				'css-loader',
				'postcss-loader',
				'sass-loader'],
				//threadPool: happyThreadPool
		}),
        new optimizeCssPlugin({
			assetNameRegExp: /\.css$/g,
	        cssProcessor: require('cssnano'),
	        cssProcessorOptions: { discardComments: { removeAll: true } },
	        canPrint: true
        }),
        new CompressionPlugin({
			filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
			algorithm: 'gzip',//算法
			test: /\.(js|css)$/,    //压缩 js 与 css
			threshold: 10240,//只处理比这个值大的资源。按字节计算
			minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
	   })
    ],
});
