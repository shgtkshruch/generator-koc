var thunkify = require('thunkify');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:270217/<%= _.slugify(appname) %>';

var connect = thunkify(function (cb) {
  MongoClient.connect(url, function (err, db) { 
    cb(err, db);
  });
});

module.exports = {
  example: function *() {
    var db = yield connect();

    // do something.

    db.close();
  }
};
