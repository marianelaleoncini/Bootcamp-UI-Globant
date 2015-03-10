define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'models/movie',
  'collections/movieList',
  'text!templates/addMovie.html',
  'views/movieList'
], function($, _, Backbone, Handlebars, MovieModel, MovieListCollection, addMovie, MovieListView){

  var AddMovieView = Backbone.View.extend({

    template: Handlebars.compile(addMovie),
    el: 'div.container',

    initialize: function(){
      //this.collection = new MovieListCollection();
      this.render();
    },

    events:{
      'click .saveMovie': 'saveMovie',
    },

    saveMovie: function(){
      this.model.set({
        name: $('#name').val(),
        year: $('#year').val(),
        duration: $('#duration').val(),
        genre: $('#genre').val(),
        description: $('#description').val(),
        director: $('#director').val(),
        actors: $('#actors').val(),
        image: $('#image')
      }); 

      this.collection.add(this.model);       

      console.log(this.collection);
    },

    render: function() {
      $('div.container').append(this.template);
      return this;
    },


  });
 
  return AddMovieView;
});