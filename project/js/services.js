(function(){
	angular.module('moviesServices', [])
	.factory('movies', function($http){
        return {

          list: function(callback){
            $http.get('/movies.json').success(callback);
          },

          find: function(name, callback){
            $http.get('/movies.json').success(function(data) {
              var movie = data.filter(function(entry){
                return entry.name === name;
              })[0];
              callback(movie);
            });
          }
        };
    });

})();