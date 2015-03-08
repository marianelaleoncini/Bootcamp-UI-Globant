define([
  'underscore',
  'backbone',
  'handlebars'
], function(_, Backbone, Handlebars){

  var MovieModel = Backbone.Model.extend({

    defaults: {
      name: 'No name',
      year: 'Unknown',
      duration: 'Unknown',
      genre: 'Unknown',
      description: 'Unknown',
      director: 'Unknown',
      actors: 'Unknown',
    },



  });
  
  
  
  return MovieModel;
});