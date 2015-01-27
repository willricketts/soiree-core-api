var geo = require('geo-tools');

module.exports = {
  geocode: function(address, callback) {
    geocode(address, function(coordinates) {
      callback(coordinates);
    });
  },

  reverseGeocode: function(coordinates, callback) {
    geo.reverseGeocode(coordinates, function(address) {
      callback(address);
    });
  },

  findPlace: function(name, callback) {
    //find place
  }
};
