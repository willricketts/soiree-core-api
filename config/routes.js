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
  'delete /events/delete/:id' : 'EventController.deactivate',

  // INVITATION
  'get /invitations' : 'InvitationController.index',
  'get /invitations/:id' : 'InvitationController.show',
  'post /invitations/create' : 'InvitationController.create',
  'put /invitations/update/:id' : 'InvitationController.modify',
  'delete /invitations/delete/:id' : 'InvitationController.deactivate',

  // PLACE
  'get /places' : 'PlaceController.index',
  'get /places/:id' : 'PlaceController.show',
  'post /places/create' : 'PlaceController.create',
  'put /places/update/:id' : 'PlaceController.modify',
  'delete /places/delete/:id' : 'PlaceController.deactivate'

  // USER

};
