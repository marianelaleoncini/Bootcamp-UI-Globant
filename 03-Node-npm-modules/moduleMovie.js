var Director = require("./moduleDirector.js");


var Movie = function (){
//	this.observers = new ObserverList();
};

Movie.prototype.play = function() {
	console.log("Playing "+this.get("title"));
};

Movie.prototype.stop = function() {
	console.log("Stoped "+this.get("title"));
};

Movie.prototype.set = function(attr, value){
	this.attr=value;
};

Movie.prototype.get = function(attr){
	return this.attr;
};

// Movie.prototype.addObserver = function( observer ){
//   this.observers.add( observer );
//   console.log("Observer added");
// };
 
// Movie.prototype.removeObserver = function( observer ){
//   this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
// };
 
// Movie.prototype.notify = function( context ){
//   var observerCount = this.observers.count();
//   for(var i=0; i < observerCount; i++){
//     this.observers.get(i).update( context );
//   }
// };

// Movie.prototype.publish=function (what) {
// 	for (var i = 0; i < this.observers.length; i++) {
// 		if (typeof this.observers[i] === 'function') {
// 			this.observers[i](what);
// 		}
// 	}
// 	console.log("Publish");
// };


module.exports = Movie;