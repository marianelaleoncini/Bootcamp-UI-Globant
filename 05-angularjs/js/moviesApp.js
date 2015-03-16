(function(){
	var moviesApp = angular.module('moviesApp', ['ngRoute', 'LocalStorageModule']);

	moviesApp.config(function (localStorageServiceProvider) {
  		localStorageServiceProvider
    	.setPrefix('movies');
	});

	moviesApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	      when('/', {
	        templateUrl: 'templates/movieList.html',
	        controller: 'MovieListController'
	      }).
	      when('/addMovie', {
	        templateUrl: 'templates/addMovie.html',
	        controller: 'AddMovieController'
	      }).
	      when('/:movieName', {
	        templateUrl: 'templates/movieDetails.html',
	        controller: 'MovieDetailsController'
	      }).
	      when('/:movieName/editMovie', {
	        templateUrl: 'templates/editMovie.html',
	        controller: 'EditMovieController'
	      }).
	      otherwise({
	        redirectTo: '/'
	      });
 	}]);

 	moviesApp.filter('trustUrl', function ($sce) {
	    return function(url) {
	      return $sce.trustAsResourceUrl(url);
	    };
	});

 	moviesApp.controller('MovieListController', ['$scope','localStorageService', function($scope, localStorageService){
 		$scope.movies = localStorageService.get('movies');
		$scope.sortBy = 'name';

 	}]);

 	moviesApp.controller('AddMovieController', ['$scope', 'localStorageService', '$location',
 		function($scope, localStorageService, $location){
 
 		var moviesInStore = localStorageService.get('movies');

   		$scope.movies = moviesInStore || [];

	    $scope.$watch('movies', function () {
	      localStorageService.set('movies', $scope.movies);
	    }, true);

	    $scope.addMovie= function () {
		    $scope.movies.push({
	 			"name": $scope.name,
				"description": $scope.description,
				"image": $scope.image,
				"trailer": $scope.trailer,
				"imdb": $scope.imdb,
				"year": $scope.year,
				"director": $scope.director,
				"duration": $scope.duration,
				"genre": $scope.genre,
				"actors": [$scope.actor0, $scope.actor1, $scope.actor2]
 		 	});
	    	$location.path('/');
	    };
 	}]);

 	moviesApp.controller('MovieDetailsController', ['$scope', '$routeParams', 'localStorageService',
 	 function($scope, $routeParams, localStorageService){
		$scope.name = $routeParams.movieName;
 		var moviesInStore = localStorageService.get('movies');
		$scope.movie = moviesInStore.filter(function(entry){
		    return entry.name === $scope.name;
		})[0];
  	}]);

 	moviesApp.controller('EditMovieController', ['$scope', '$routeParams', 'localStorageService', '$location',
 	 function($scope, $routeParams, localStorageService, $location){	

		$scope.name = $routeParams.movieName;
 		var moviesInStore = localStorageService.get('movies');

		$scope.movie = moviesInStore.filter(function(entry){
		    return entry.name === $scope.name;
		})[0];

		$scope.movies = moviesInStore || [];

		var i = $scope.movies.indexOf($scope.movie);
		$scope.movies.splice(i, 1);

  		$scope.$watch('movies', function () {
	      localStorageService.set('movies', $scope.movies);
	    }, true);

 		

		$scope.editMovie = function(){
			$scope.movies.push({
	 			"name": $scope.movie.name,
				"description": $scope.movie.description,
				"image": $scope.movie.image,
				"trailer": $scope.movie.trailer,
				"imdb": $scope.movie.imdb,
				"year": $scope.movie.year,
				"director": $scope.movie.director,
				"duration": $scope.movie.duration,
				"genre": $scope.movie.genre,
				"actors": [$scope.movie.actor0, $scope.movie.actor1, $scope.movie.actor2]
 		 	});
	    	$location.path('/');

		};
	}]);

	moviesApp.controller('DeleteMovieController', ['$scope', '$location', 'localStorageService',
	 function($scope, $location, localStorageService){

	 	$scope.$watch('movies', function () {
	      localStorageService.set('movies', $scope.movies);
	    }, true);
	 	
	 	$scope.deleteMovie = function(movie){
	 		var i = $scope.movies.indexOf(movie);
			$scope.movies.splice(i, 1);
	    	$location.path('/');
	 	};

	 	/*
			Cuando borra la última película desaparece de la vista pero no se borra de localStorage, 
			y si agrego antes del método deleteMovie estas líneas:
			
			var moviesInStore = localStorageService.get('movies');
			$scope.movies = moviesInStore || [];
	    	
			Si se borra de localStorage pero $location.path('/'); deja de funcionar
	 	*/
	}]);
 	  	
})();
