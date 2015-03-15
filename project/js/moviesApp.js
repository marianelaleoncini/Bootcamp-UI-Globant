(function(){
	var moviesApp = angular.module('moviesApp', ['ngRoute','moviesControllers', 'moviesDirectives', 'moviesFactories']);

	moviesApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	      when('/', {
	        templateUrl: 'templates/movieList.html',
	        controller: 'MovieListController'
	      }).
	      when('/:movieName', {
	        templateUrl: 'templates/movieDetails.html',
	        controller: 'MovieDetailsController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
 	}]);

})();
