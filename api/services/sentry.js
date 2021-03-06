// Authentication Helper Functions

var bcrypt = require('bcrypt');

module.exports = {
  hashPassword: hashPassword,
  checkPassword: checkPassword
};

function hashPassword(password, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      callback(err, hash);
    });
  });
}

function checkPassword(password, callback) {
  bcrypt.compare(password, hash, function(err, passwordsMatch) {
    passwordsMatch = (err) ? err : passwordsMatch;
    callback(err, passwordsMatch);
  });
}