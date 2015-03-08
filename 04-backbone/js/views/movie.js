define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movie.html'
], function($, _, Backbone, Handlebars, movieTemplate){

  var MovieView = Backbone.View.extend({

    tagName: 'div',
    className: 'movieContainer',
    template: Handlebars.compile(movieTemplate),

    initialize: function(){
      this.render();
    },

    render: function() {
      
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

  });
 
  return MovieView;
});