define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movieList.html',
  'views/movie',
  'collections/movieList',
  'models/movie'
], function($, _, Backbone, Handlebars, movieListTemplate, MovieView, MovieListCollection, MovieModel){

  var MovieListView = Backbone.View.extend({

    template: Handlebars.compile(movieListTemplate),

    initialize: function(){
      console.log('4 - estoy en initialize de movie list view');

      this.collection = new MovieListCollection();
      var intoTheWild  =  new MovieModel({
        name: 'Into the Wild',
        year: '2007',
        duration: '148 min',
        genre: 'Adventure',
        description: 'After graduating from Emory University, top student and athlete Christopher McCandless'+ 
        'abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska'+
        'to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.',
        director: 'Sean Penn',
        actors: 'Emile Hirsch, Vince Vaughn, Catherine Keener'
      }); 
      this.collection.add(intoTheWild);       
      intoTheWild.save();

      var aBeautifulMind  =  new MovieModel({
        name: 'A Beautiful Mind',
        year: '2001',
        duration: '135 min',
        genre: 'Drama',
        description: 'After a brilliant but asocial mathematician accepts secret work in cryptography,'+ 
        'his life takes a turn for the nightmarish.',
        director: 'Ron Howard',
        actors: 'Russell Crowe, Ed Harris, Jennifer Connelly'
      });
      this.collection.add(aBeautifulMind);
      aBeautifulMind.save();
  
      this.render();
    },

    render: function() {
      console.log('5 - render lista');
      $('body').append(this.template);
      console.log(this.collection);
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

  });
  return MovieListView;
});