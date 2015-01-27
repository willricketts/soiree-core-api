/**
 * PlaceController
 *
 * @description :: Server-side logic for managing places
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
  Place.find(function(err, places) {
    errorHandler.nullCollection(res, places);
    res.json(200, places);
  });
}

function create(req, res) {
  var p = req.params.all();

  if(p.addressLine1 !== undefined){
    var payload = p.addressLine1 + " " + p.addressLine2 + " " + p.city + " " + p.province + " " + p.country;

    magellan.geocode(payload, function(coordinates) {
      p.latitude = coordinates.lat;
      p.longitude = coordinates.lng;
      Place.create(p, function(err, place) {
        errorHandler.nullCollection(res, place);
        res.json(201, place);
      });
    });
  }
  else if((p.latitude) && (p.longitude)) {
    magellan.reverseGeocode({ lat: p.latitude, lng: p.longitude }, function(a) {
      var addressLine1 = a.streetNumber + " " + a.street; // + ", " + a.city + ", " a.state + " " + a.postal_code

      Place.create({
        fullAddress: a.fullAddress,
        addressLine1: addressLine1,
        city: a.city,
        province: a.state,
        country: a.country,
        latitude: a.latitude,
        longitude: a.longitude
      }, function(err, place) {
        errorHandler.serverError(err, res);
        res.json(201, place);
      });
    });
  }
  else {
    res.json(400, { error: 'Invalid params' });
  }
}

function show(req, res) {
  var p = req.params.all();

  Place.findOne(p.id, function(err, place) {
    errorHandler.nullCollection(res, place);
    res.json(200, place);
  });
}

function modify(req, res) {
  var p = req.params.all();

  Place.update(p.id, p, function(err, place) {
    errorHandler.nullCollection(res, place);
    res.json(200, place);
  });
}

function deactivate(req, res) {
  var p = req.params.all();

  Place.update(p.id, { active: false }, function(err, place) {
    errorHandler.nullCollection(res, place);
    res.json(200, place);
  });
}

