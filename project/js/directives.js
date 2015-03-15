(function(){
	var moviesDirectives = angular.module('moviesDirectives', []);

	moviesDirectives.directive('actorsMovie', function(){
 		return{
 			restrict: 'E',
 			templateUrl: 'templates/actorsMovie.html'
 		};

 	});

 	moviesDirectives.directive('trailerMovie', function(){
 		return{
 			restrict: 'E',
 			templateUrl: 'templates/trailerMovie.html'
 		};

 	});

})();