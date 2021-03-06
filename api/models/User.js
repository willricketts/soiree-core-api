/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'mongo',
  schema: true,
  attributes: {

    handle: {
      type: 'string',
      required: true,
      unique: true
    },

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    password: {
      type: 'string',
      required: true
    },

    profilePictureUrl: {
      type: 'string'
    },

    twitter: {
      type: 'string'
    },

    instagram: {
      type: 'string'
    },

    facebook: {
      type: 'string'
    },

    foursquare: {
      type: 'string'
    },

    meetup: {
      type: 'string'
    },

    active: {
      type: 'boolean',
      defaultsTo: true
    },

    events: {
      model: 'Event'
    },

    admin: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

