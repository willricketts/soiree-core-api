/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  // CRUD ACTIONS
  index: index,
  create: create,
  show: show,
  modify: modify,
  deactivate: deactivate,
  makeAdmin: makeAdmin,

  // COMPOUND ACTIONS

  updateProfilePicture: updateProfilePicture,
  updateTwitter: updateTwitter,
  updateInstagram: updateInstagram,
  updateFacebook: updateFacebook,
  updateFoursquare: updateFoursquare,
  updateMeetup: updateMeetup
};

// CRUD ACTIONS

function index(req, res) {
  User.find(function(err, users) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, users);
    res.json(201, users);
  });
}

function create(req, res) {
  var p = req.params.all();
  var h = req.headers;

  User.findOne({ email: p.email }, function(err, user) {
    errorHandler.serverError(err, res);
    if(!user) {
      sentry.hashPassword(p.password, function(err, hashedPassword) {
        errorHandler.serverError(err, res);
        p.password = hashedPassword;
        User.create(p, function(err, user) {
          errorHandler.serverError(err, res);
          errorHandler.nullCollection(res, user);
          tokenFunctions.generate(function(token) {
            user.apitoken = token;
            res.json(201, user);
          });
        });
      });
    }
    else {
      res.json(400,'Email is already registered.')
    }
  });
}

function show(req, res) {
  var p = req.params.all();

  User.findOne({ handle: p.handle }, function(err, user) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, user);
    res.json(200, user);
  });
}

function modify(req, res) {
  var p = req.params.all();

  User.update({ handle: p.handle }, p, function(err, user) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, user);
    res.json(200, user);
  });
}

function deactivate(req, res) {
  var p = req.params.all();

  User.update({ handle: p.handle }, p, function(err, user) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, user);
    res.json(200, user);
  });
}

// COMPOUND ACTIONS

function updateProfilePicture(req, res) {

}

function updateTwitter(req, res) {

}

function updateInstagram(req, res) {

}

function updateFacebook(req, res) {

}

function updateFoursquare(req, res) {

}

function updateMeetup(req, res) {

}

function makeAdmin(req, res) {
  var p = req.params.all();

  User.update({ handle: p.handle }, { admin: true }, function(err, user) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, user);
    res.json(200, user);
  });
}
