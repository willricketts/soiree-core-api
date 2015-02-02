/**
 * validClient
 *
 * Ensures that all requests are blocked if not from a valid client
 *
 */
module.exports = function(req, res, next) {

  var h = req.headers;

  Client.findOne(h.clientToken, function(err, client) {
    errorHandler.serverError(err, res);
    if(!client) {
      res.send(400, 'Invalid client.');
    }
    else {
      return next();
    }
  });
};
