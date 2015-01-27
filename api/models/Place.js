/**
* Place.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  attributes: {

    addressLine1: {
      type: 'string'
    },

    addressLine2: {
      type: 'string'
    },

    city: {
      type: 'string',
      required: true
    },

    province: {
      type: 'string',
      required: true
    },

    country: {
      type: 'string',
      required: true
    },

    fullAddress: {
      type: 'string'
    },

    latitude: {
      type: 'string'
    },

    longitude: {
      type: 'string'
    },

    events: {
      model: 'Event'
    }
  }
};

