/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'mongo',
  schema: true,
  attributes: {

    title: {
      type: 'string',
      required: true
    },

    date: {
      type: 'string',
      required: true
    },

    owner: {
      type: 'string',
      required: true
    },

    place: {
      model: 'Place'
    },

    host: {
      model: 'User'
    },

    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
