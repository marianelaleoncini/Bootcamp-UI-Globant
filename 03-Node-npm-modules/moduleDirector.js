var Director = function(name){
	this.name = name;
};

Director.prototype.speak = function(){
	console.log(this.name + " says: ");
	quotes = this.get("quotes");
	if (quotes.length!=0) {
		quotes.forEach(function(quote) {
		    console.log(quote);		    
		});
	}
	else{
		console.log("There are not quotes");
	}
};

Director.prototype.set = function(attr, value){
	this.attr=value;
};

Director.prototype.get = function(attr){
	return this.attr;
};

module.exports = Director;

/*Testing
var director = new Director("Juan");
director.set("quotes", ["dsdas", "dsadqarv", "oppol"]);
director.speak();*/