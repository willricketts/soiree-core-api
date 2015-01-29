var token = require('guid');

module.exports = {

  generate: generate,
  deactivate: deactivate
};

function generate(callback) {
  var newToken = token.create();
  callback(newToken.value);
}

function deactivate(token, callback) {

}
