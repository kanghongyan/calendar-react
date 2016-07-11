/**
 * Created by khongyan on 16/6/20.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var HtmlwebpackPlugin = require('html-webpack-plugin');

var jqueryPath = path.join(__dirname, '/src/lib/jquery/dist/jquery.min.js');

//如果不指定entry入口文件的name,这里为'app',则打包的css默认名为main.css
module.exports = {
  entry: {
    'vendor': [jqueryPath],
    'app': [
      './src/index',
      'webpack-hot-middleware/client?reload=true'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
  resolve: {
    root: 'src/lib/',//路径,从这里开始查找
    extensions: ['', '.js', '.json', '.scss'],//require时可以不写这些后缀
    alias: {//模块别名定义,可以这样引用require('zepto'),避免写很长的名字
      zepto: 'zepto/zepto.min.js'
    }
  },
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
        loader: 'file?name=img/img-[hash].[ext]'
      },
      // FONT
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file" }
    ],
    noParse: [
      path.join(__dirname + '/src/lib/**')
    ]
  }
};