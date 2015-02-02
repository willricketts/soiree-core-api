/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	login: login,
  logout: logout
};

function login(req, res) {
  var p = req.params.all();
  User.findOne({ email: p.email }, function(err, user) {
    errorHandler.serverError(err, res);
    if(user) {
      sentry.checkPassword(user.password, p.password, function(err, passwordsMatch) {
        errorHandler.serverError(err, res);
        if(passwordsMatch) {
          ApiToken.findOne({ token: user.apitoken }, function(err, token) {
            errorHandler.serverError(err, res);
            if(token) {
              ApiToken.update(token, { active: false }, function(err, token) {
                errorHandler.serverError(err, res);
                tokenFunctions.generate(function(newToken) {
                  ApiToken.create({ token: newToken, user: user.id }, function(err, token) {
                    errorHandler.serverError(err, res);
                    if(token) {
                      user.apiToken = newToken;
                      res.json(200, user);
                    }
                    else {
                      res.json(500, 'Lost in space!');
                    }
                  });
                });
              });
            }
            else {
              res.json(500, 'Lost in space!');
            }
          });
        }
        else {
          res.json(400, 'Incorrect username or password.');
        }
      });
    }
    else {
      res.json(400, 'Incorrect username or password.');
    }
  });
}

function logout(req, res) {

}

