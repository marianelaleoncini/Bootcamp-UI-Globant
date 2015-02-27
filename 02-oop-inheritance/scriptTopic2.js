//1------------------------------------------------------------------
var Movie = function (){
	this.observers = new ObserverList();
}

Movie.prototype.play = function() {
	console.log("Playing "+this.get("title"));
}

Movie.prototype.stop = function() {
	console.log("Stoped "+this.get("title"));
}

Movie.prototype.set = function(attr, value){
	this.attr=value;
}

Movie.prototype.get = function(attr){
	return this.attr;
}

//2------------------------------------------------------------------
var intoTheWild = new Movie();
intoTheWild.set("title", "Into the wild");
intoTheWild.play();

var theHelp = new Movie();
theHelp.set("title", "The Help");
theHelp.stop();

//3------------------------------------------------------------------
var MovieObserver = function(){

}

function ObserverList(){
  this.observerList = [];
}
 
ObserverList.prototype.add = function( obj ){
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};
 
ObserverList.prototype.get = function( index ){
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function( obj, startIndex ){
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
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

var observer2 = new MovieObserver();
intoTheWild.addObserver(observer2);
var observer2 = new MovieObserver();
intoTheWild.addObserver(observer2);
console.log(intoTheWild.observers.count());

//4, 5 and 6------------------------------------------------------------------
Movie.prototype.publish=function (what) {
	for (var i = 0; i < this.observers.length; i++) {
		if (typeof this.observers[i] === 'function') {
			this.observers[i](what);
		}
	}
	console.log("Publish");
};

intoTheWild.publish(intoTheWild.play);
intoTheWild.publish(intoTheWild.stop);

//8------------------------------------------------------------------

var DownloadableMovie = function(){
  Movie.call(this);
}

DownloadableMovie.prototype = Object.create(Movie.prototype);

DownloadableMovie.prototype.download = function(){
  console.log("download");
}

var down = new DownloadableMovie();
down.set("title", "Cars");
console.log(down.get("title"));
down.play();
down.download();

//9------------------------------------------------------------------

var Social = function(){
  this.share = function(friendName){
    console.log("Sharing " +this.get("title")+ " with " + friendName);  
  };
  this.like = function(){

  };
};

//10------------------------------------------------------------------

Social.call(Movie.prototype);
intoTheWild.share("Juan");

//11------------------------------------------------------------------

var Actor = function(name){
  this.name=name;
}

var actor1 = new Actor("Emile Hirsch");
var actor2 = new Actor("William Hurt");
var actor3 = new Actor("Marcia Gay Harden");

//12------------------------------------------------------------------
var actors = [];
actors.push(actor1, actor2, actor3);
intoTheWild.set("actors", actors);
arrayActors = intoTheWild.get("actors");
console.log("Actors: ");
arrayActors.forEach(function(actor){
  console.log(actor.name);
});