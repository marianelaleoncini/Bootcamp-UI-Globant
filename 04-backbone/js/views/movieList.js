define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movieList.html',
  'views/movie',
  'collections/movieList',
  'models/movie',
  'views/addMovie'

], function($, _, Backbone, Handlebars, movieListTemplate, MovieView, MovieListCollection, MovieModel, AddMovieView){

  var MovieListView = Backbone.View.extend({

    template: Handlebars.compile(movieListTemplate),
    el: 'div.container',

    initialize: function(){
      console.log('4 - estoy en initialize de movie list view');
      this.render();
      this.listenTo(this.collection, 'add', this.render);


/*      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);*/
    },


    render: function() {
      console.log('5 - render lista');
      console.log(this.collection);
      $('div.container').html(this.template);
      this.collection.each(function(movie){
        this.renderMovie(movie);
      }, this );
    },

    renderMovie: function(movie) {
      console.log('6 - render movie');
      var movieView = new MovieView({
        model: movie
      });
    },

    events:{
      'click .add':'addMovie'
    },

    addMovie: function(){
      console.log("entra a evento add");
      var movieModel = new MovieModel();
      var addMovieView = new AddMovieView({
      model: movieModel,
      collection: this.collection
      }); 
    }

  });
  return MovieListView;
});