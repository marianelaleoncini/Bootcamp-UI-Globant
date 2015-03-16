(function(){
	var moviesApp = angular.module('moviesApp', ['ngRoute','moviesControllers', 'moviesDirectives', 'moviesFactories', 'moviesFilters']);

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
