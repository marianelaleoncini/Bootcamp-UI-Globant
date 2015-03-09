require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery-2.1.3',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
    backboneLocalStorage: 'lib/backbone.localStorage',
    handlebars: 'lib/handlebars-v3.0.0',
    text: 'lib/text'
  },

  shim: {
    jquery : {
      exports : 'jQuery'
    },
    underscore: {
      exports: '_'
    },

    handlebars: {
      exports: 'Handlebars'
    },

    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },

    backboneLocalstorage: {
      deps: ['backbone'],
      exports: 'LocalStorage'
    }
  }  
});

require([
'routers/router'], function(Router){
  console.log("1 - main ok");
  new Router();
});

