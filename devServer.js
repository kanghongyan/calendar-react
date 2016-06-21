/**
 * Created by khongyan on 16/6/20.
 */
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackMiddleware = require("webpack-dev-middleware");//打包到内存中
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var app = express();

app.use(webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(3000, 'localhost', function (err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('listening at http://localhost:3000')
});