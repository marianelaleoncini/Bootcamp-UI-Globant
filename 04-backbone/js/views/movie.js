define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'text!templates/movie.html'
], function($, _, Backbone, Handlebars, movieTemplate){

  var MovieView = Backbone.View.extend({

    template: Handlebars.compile(movieTemplate),
    tagName:'div',
    className: 'movieContainer',

    initialize: function(){
      console.log(this.$el);
      this.render();
      this.listenTo(this.model, 'destroy', this.remove);
    },


    events:{
      'click .destroy': 'destroy',
    },

    destroy: function(){
      console.log('entra a destroy');
      this.model.destroy();
    },

    render: function() {
      console.log(this.model.toJSON());
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },


  });
 
  return MovieView;
});