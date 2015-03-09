define([
  'underscore',
  'backbone',
  'handlebars',
  'backboneLocalStorage',
  'models/movie'
], function(_, Backbone, Handlebars, LocalStorage, Movie){

  var MovieList = Backbone.Collection.extend({

    model: Movie,
    localStorage: new LocalStorage('movies-backbone'),

    initialize: function(){

    }

  });

  return MovieList;
});