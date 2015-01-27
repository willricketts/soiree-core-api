module.exports = {

  nullCollection: function(res, collection) {
    if(collection === undefined) {
      return res.send(404, 'Not found.');
    }
  },

  serverError: function(err, res) {
    if(err) {
      return res.send(500, 'Lost in space!');
    }
  }
};