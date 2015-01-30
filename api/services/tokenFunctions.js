var token = require('guid');

module.exports = {

  generate: generate,
  deactivate: deactivate
};

function generate(callback) {
  var newToken = token.create();
  callback(newToken.value);
}

function deactivate(token, res, callback) {
  ApiToken.findOne({token: token}, function (err, token) {
    errorHandler.serverError(err, res);
    ApiToken.update(token, {active: false}, function (err, token) {
      errorHandler.serverError(err, res);
      callback(token);
    });
  });
}
