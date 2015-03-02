(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director = function(){

};

module.exports = Director;
},{}],2:[function(require,module,exports){
var Director = require("./moduleDirector.js");

var Movie = function (){
	this.observers = new ObserverList();
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

Movie.prototype.addObserver = function( observer ){
  this.observers.add( observer );
  console.log("Observer added");
};
 
Movie.prototype.removeObserver = function( observer ){
  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};
 
Movie.prototype.notify = function( context ){
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update( context );
  }
};

Movie.prototype.publish=function (what) {
	for (var i = 0; i < this.observers.length; i++) {
		if (typeof this.observers[i] === 'function') {
			this.observers[i](what);
		}
	}
	console.log("Publish");
};

module.exports = Movie;
},{"./moduleDirector.js":1}]},{},[2]);
