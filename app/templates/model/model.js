var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/<%= _.slugify(appname) %>');

// create users collection
// var users = wrap(db.get('users'));

module.exports = {
  example: function *() {
    yield users.insert({name: 'test'});
  }
};
