/**
* ApiToken.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'mongo',
  schema: true,
  attributes: {

    apitoken: {
      type: 'string',
      required: true,
      unique: true
    },

    expiry: {
      type: 'string',
      required: true
    },

    user: {
      type: 'string',
      required: true
    },

    active: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
