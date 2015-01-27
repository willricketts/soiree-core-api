/**
 * Route Mappings
 * (sails.config.routes)
 *
*/

module.exports.routes = {

  // UTILITY
  'get /' : 'UtilityController.heartbeat',
  'get /docs' : 'UtilityController.docs',

  // EVENT
  'get /events' : 'EventController.index',
  'get /events/:id' : 'EventController.show',
  'post /events/create' : 'EventController.create',
  'put /events/update/:id' : 'EventController.modify',
  'delete /events/delete/:id' : 'EventController.deactivate'

  // INVITATION

  // PLACE

  // USER

};
