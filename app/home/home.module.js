(function() {
	'use strict';

	var dependencies = ['ui.router']

	angular.module('app.home', dependencies)
		.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/home/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'homeCtrl'
		});
	}
}());