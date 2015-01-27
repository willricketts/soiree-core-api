/**
 * InvitationController
 *
 * @description :: Server-side logic for managing invitations
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
  Invitation.find(function(err, invitations) {
    errorHandler.serverError(err, res);
    res.json(200, invitations);
  });
}

function create(req, res) {
  var p = req.params.all();
  Invitation.create(p, function(err, invitation) {
    errorHandler.serverError(err, res);
    res.json(201, invitation);
  });
}

function show(req, res) {
  var p = req.params.all();
  Invitation.findOne(p.id, function(err, invitation) {
    errorHandler.serverError(err, res);
    res.json(200, invitation);
  });
}

function modify(req, res) {
  var p = req.params.all();
  Invitation.update(p.id, p, function(err, invitation) {
    errorHandler.serverError(err, res);
    res.json(200, invitation);
  });
}

function deactivate(req, res) {
  var p = req.params.all();
  Invitation.update(p.id, { active: false }, function(err, invitation) {
    errorHandler.serverError(err, res);
    res.json(200, invitation);
  });
}
