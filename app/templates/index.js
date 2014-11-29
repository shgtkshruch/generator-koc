var koa = require('koa');
var app = koa();
var views = require('co-views');
var serve = require('koa-static');

var render = views('views', {
  ext: 'jade'
});

app.use(serve('public'));

app.use(function *() {
  this.body = yield render('index');
});

app.listen(3000);
