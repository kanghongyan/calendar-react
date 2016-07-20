/**
 * Created by khongyan on 16/7/21.
 */
//less
var fs = require('fs');
var less = require('less');

//TODO: less parse,暂时写到这里,用作主题切换,后续会写到devServer里

//不支持parse方法了
/*parser.parse('.class { width: 1 + 1 }', function (err, tree) {
  if (err) { return console.error(err) }
  console.log(tree.toCSS());
});*/

less.render('.class { width: 1 + 4 }', function (e, css) {
  console.log(css);
  fs.writeFile('upload/new.css', css.css, function (err) {
    if (err) throw err;
  })
});
