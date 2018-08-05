const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  target: 'node',
  entry: path.resolve(__dirname, 'server/server.prod.js'),
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist/server/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader/locals?modules&camelCase&importLoaders=2&localIdentName=[hash:base64:8]',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss']
  },
}