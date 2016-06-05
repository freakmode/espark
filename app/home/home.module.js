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
			controllerAs: 'homeCtrl',
			resolve: {
				config: getConfig,
				domains: getDomains,
				students: getStudents
			}
		});
	}

	function getStudents(studentService, parserService) {
		return studentService.get()
			.then(function(response) {
				return parserService.parseHeader(response.data);
			});
	}

	function getDomains(domainService, parserService) {
		return domainService.get()
			.then(function(response) {
				return parserService.parseRow(response.data);
			});
	}

	function getConfig(configService) {
		return configService.get()
			.then(function(response) {
				return response.data;
			});
	}
}());