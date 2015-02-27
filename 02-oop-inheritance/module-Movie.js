var Movie = (function (){
	this.observers = new ObserverList();
	return{

		play: function() {
			console.log("Playing "+this.get("title"));
		},

		stop: function() {
			console.log("Stoped "+this.get("title"));
		},

		set: function(attr, value){
			this.attr=value;
		},

		get: function(attr){
			return this.attr;
		},

		addObserver: function( observer ){
		  this.observers.add( observer );
		  console.log("Observer added");
		},
		 
		removeObserver = function( observer ){
		  this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
		},
		 
		notify = function( context ){
		  var observerCount = this.observers.count();
		  for(var i=0; i < observerCount; i++){
		    this.observers.get(i).update( context );
		  }
		},

		publish=function (what) {
			for (var i = 0; i < this.observers.length; i++) {
				if (typeof this.observers[i] === 'function') {
					this.observers[i](what);
				}
			}
			console.log("Publish");
		}
	}	
})();