define([
  'underscore',
  'backbone',
  'handlebars',
  'models/movie'
], function(_, Backbone, Handlebars, Movie){

  var MovieList = Backbone.Collection.extend({

    model: Movie,
    url: '/movieList'

  });

  return MovieList;
});