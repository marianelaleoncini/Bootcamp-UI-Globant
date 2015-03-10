define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/movie',
  'views/movieList',
  'collections/movieList'

], function($, _, Backbone, Handlebars, MovieModel, MovieListView, MovieListCollection){

  var Router = Backbone.Router.extend({
    routes: {

      '/movieList': 'showMovieList',
      
      
    },
  
      initialize: function(){
      console.log('2 - entra initialize router');
      this.showMovieList();

      Backbone.history.start();
    },

    showMovieList: function(){
      console.log('3 - estoy en show movie');
      var movieModel = new MovieModel();
      var movieListCollection = new MovieListCollection();
      var movieListView = new MovieListView({
      model: movieModel,
      collection: movieListCollection
      });  
    },

    

  });
  return Router;
});