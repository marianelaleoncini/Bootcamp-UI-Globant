require.config({
  paths: {
    jquery: 'lib/jquery-2.1.3',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone',
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
    }
  }  
});

require([
'routers/router'], function(Router){
	Router.initialize();
});