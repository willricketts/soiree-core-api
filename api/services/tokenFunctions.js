var uuid = require('node-uuid');

module.exports = {

  generate: function(callback) {
    var newToken = uuid.v4();
    callback(newToken);
  }
};
