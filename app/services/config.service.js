(function () {
	'use strict';

	angular.module('app.services')
		.factory('configService', configService);

	configService.$inject = ['$http'];

	function configService($http) {
		var service = {
			get: get
		};

		return service;

		function get() {
			var request = {
				method: 'GET',
				url: '../data/json/config.json'
			};

			return $http(request);
		}
	}
}());