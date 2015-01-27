/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  index: index,
  create: create,
  show: show,
  modify: modify,
  deactivate: deactivate,

};

function index(req, res) {
  Event.find(function(err, events) {
    //errorHandler
    res.json(200, events);
  });
}

function create(req, res) {
  var p = req.params.all();

  Event.create(p, function(err, event) {
    //error handler
    res.json(201, event);
  });
}

function show(req, res) {
  var p = req.params.all();

  Event.findOne(p.id, function(err, event) {
    //error handler
    res.json(200, event);
  });
}

function modify(req, res) {
  var p = req.params.all();

  Event.update(p.id, p, function(err, event) {
    //error handler
    res.json(200, event);
  });
}

function deactivate(req, res) {
  var p = req.params.all();

  Event.update(p.id, { active: false }, function(err, event) {
    //error handler
    res.json(200, event);
  });
}
