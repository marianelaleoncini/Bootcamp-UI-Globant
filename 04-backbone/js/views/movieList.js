define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movieList.html'
], function($, _, Backbone, Handlebars, movieListTemplate){

  var MovieView = Backbone.View.extend({

    template: Handlebars.compile(movieListTemplate),


    //REVISARRR!
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    render: function() {
      this.collection.each(function( item ) {
      this.renderBook( item );
    }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
      var bookView = new app.BookView({
        model: item
      });
      this.$el.append( bookView.render().el );
    }
    });
 
  return MovieView;
});