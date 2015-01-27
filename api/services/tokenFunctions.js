//TODO: replace terrible uuid with 'token'

var token = require('guid');

module.exports = {

  generate: function(callback) {
    var newToken = token.create();
    callback(newToken.value);
  }
};
