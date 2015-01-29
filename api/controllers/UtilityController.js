/**
 * UtilityController
 *
 * @description :: Server-side logic for managing utilities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  heartbeat: heartbeat,
  docs: docs
};

function heartbeat(req, res) {
  res.json(200, { version: 'v1' });
}

function docs(req, res) {
  res.json(200, { docs: 'http://github.com/willricketts/soiree-core' });
}
