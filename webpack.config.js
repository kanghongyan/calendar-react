/**
 * Created by khongyan on 16/6/20.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index',
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev'),
        'DEBUG': true,
        'DEVELOP': true
      }
    })
    /*new HtmlwebpackPlugin({
      title: 'Hello World app'
    })*/
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { compact: false },
        include: path.join(__dirname, 'src')
      },
      // LESS
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "ie 8", "ie 9", "> 1%"]}!less-loader')
      },
      // CSS
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "ie 8", "ie 9", "> 1%"]}')
      },
      // IMAGE
      {
        test: /.(gif|jpg|png)$/,
        loader: 'file?name=img-[hash].[ext]'
      },
      // FONT
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file" }
    ]
  }
};