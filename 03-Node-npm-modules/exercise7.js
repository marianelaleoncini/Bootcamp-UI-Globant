var Movie = require("./moduleMovie.js");
var Director = require("./moduleDirector.js");
var $ = require('jquery');

var alien = new Movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

//Cuando lo pruebo en Node.js me tira este error: TypeError: undefined is not a function
$.each(alien.get('director').get('quotes'), function(index, quote){
	console.log(quote);
});