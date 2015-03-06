define('Router',[
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'views/movie'
], function($, _, Backbone, Handlebars, MovieView){
  var Router = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/movie': 'showMovie',
      
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var router = new Router;

    router.on('showMovie', function(){
      var movieView = new Movie();
      movieView.render();
    });

    router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });

    Backbone.history.start();
  };

  return Router;

});