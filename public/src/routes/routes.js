

(function(angular){
	'use strict';
	var app = angular.module('Diveargnet',['ngRoute']);
	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.
			when('/',{
				templateUrl:"public/app/templates/index.tmpl.html"
			});

		if(window.history && window.history.pushState){
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
		}


	}]);

})(angular);