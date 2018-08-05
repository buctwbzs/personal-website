const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  webpack = require('webpack')

module.exports = {

  target: 'node',
  entry: path.resolve(__dirname, 'server/server.prod.js'),
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'static_url': JSON.stringify('http://www.buctwbzs.com/statics/images/personal-website/')
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss']
  },
  mode: 'production'
}