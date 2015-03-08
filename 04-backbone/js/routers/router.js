define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/movie',
  'views/movie'

], function($, _, Backbone, Handlebars, MovieModel, MovieView){

  var Router = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/movie': 'showMovie',
      
    },
  
      initialize: function(){
     
      this.showMovie();

      Backbone.history.start();
    },

    showMovie: function(){
      var movieModel = new MovieModel();
      var movieView = new MovieView({
      model: movieModel
      });  
    }

  });
  return Router;
});