(function(){
	var moviesControllers = angular.module('moviesControllers', []);

	moviesControllers.controller('MovieListController',['$scope','$http', 'movies', function($scope, $http, movies){
		movies.list(function(movies) {
          	$scope.movies = movies;
        });
		$scope.sortBy = 'name';
	}]);

	moviesControllers.controller('MovieDetailsController', ['$scope', '$routeParams', 'movies',
	 function($scope, $routeParams, movies) {
   		movies.find($routeParams.movieName, function(movie) {
         	$scope.movie = movie;
        });
  	}]);

})();