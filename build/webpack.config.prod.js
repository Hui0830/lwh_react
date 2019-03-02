const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// optimizeCssPlugin CSS文件压缩插件
const optimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');//webpack合并插件

const webpackBase = require('./webpack.config.base');

const extractSCSS = new MiniCssExtractPlugin({
    filename: 'css/[name].[md5:contenthash:hex:8].css',
    chunkFilename: 'css/[name]_[id].css',
    fallback:'style-loader'
});

module.exports = merge(webpackBase, {
    mode: 'production',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../docs/dist'), // 打包后的文件存放的地方
        filename: '[name]_[hash].js', // 打包后输出文件的文件名
        chunkFilename: '[name]_[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
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
        }
    },
    plugins: [
        extractSCSS,
        new optimizeCssPlugin({
			assetNameRegExp: /\.css$/g,
	        cssProcessor: require('cssnano'),
	        cssProcessorOptions: { discardComments: { removeAll: true } },
	        canPrint: true
		}),
    ],
});
