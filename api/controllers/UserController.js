/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  index: index,
  create: create,
  show: show,
  modify: modify,
  deactivate: deactivate

};

function index(req, res) {
  User.find(function(err, users) {
    //error handler
    res.json(200, users);
  });
}

function create(req, res) {
  var p = req.params.all();

  User.create(p, function(err, user) {
    //error handler
    res.json(201, user);
  });
}

function show(req, res) {
  var p = req.params.all();

  User.findOne(p.email, function(err, user) {
    //error handler
    res.json(200, user);
  });
}

function modify(req, res) {
  var p = req.params.all();

  User.update(p.email, p, function(err, user) {
    //error handler
    res.json(200, user);
  });
}

function deactivate(req, res) {
  var p = req.params.all();

  User.update(p.email, p, function(err, user) {
    //error handler
    res.json(200, user);
  });
}
