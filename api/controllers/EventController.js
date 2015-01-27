/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  // CRUD ACTIONS
  index: index,
  create: create,
  show: show,
  modify: modify,
  deactivate: deactivate

  // COMPOUND ACTIONS
};

// CRUD ACTIONS

function index(req, res) {
  Event.find(function(err, events) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, events);
    res.json(200, events);
  });
}

function create(req, res) {
  var p = req.params.all();

  Event.create(p, function(err, event) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, events);
    res.json(201, event);
  });
}

function show(req, res) {
  var p = req.params.all();

  Event.findOne(p.id, function(err, event) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, event);
    res.json(200, event);
  });
}

function modify(req, res) {
  var p = req.params.all();

  Event.update(p.id, p, function(err, event) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, event);
    res.json(200, event);
  });
}

function deactivate(req, res) {
  var p = req.params.all();

  Event.update(p.id, { active: false }, function(err, event) {
    errorHandler.serverError(err, res);
    errorHandler.nullCollection(res, event);
    res.json(200, event);
  });
}

// COMPOUND ACTIONS

function findAllEventsByUser(req, res) {
  
}