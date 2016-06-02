(function () {
	'use strict';

	angular.module('app.services')
		.factory('domainService', domainService);

	domainService.$inject = ['$http'];

	function domainService($http) {
		var service = {
			get: get
		};

		return service;

		function get() {
			var request = {
				method: 'GET',
				url: '../data/domain_order.csv'
			};

			return $http(request);
		}
	}
}());