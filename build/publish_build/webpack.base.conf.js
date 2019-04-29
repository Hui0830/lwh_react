const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const components_entry = require('./components_entry.json');

function resolve(dir) {
  return path.join(__dirname, '../..', dir)
}

const extractSCSS = new MiniCssExtractPlugin({
  filename: '[name]/style/index.css',
  chunkFilename: '[name]/style/index.css',
  fallback:'style-loader'
});

module.exports = {
  mode: 'production',
  entry: components_entry,
  externals: [nodeExternals()],
  output: {
    path: resolve('lib'),
    filename: '[name]/index.js',
    library: 'lwh-react',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('package')],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    extractSCSS,
  ],
}
