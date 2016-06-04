(function () {
	'use strict';

	angular.module('app.services')
		.factory('studentService', studentService);

	studentService.$inject = ['$http'];

	function studentService($http) {
		var service = {
			get: get
		};

		return service;

		function get() {
			var request = {
				method: 'GET',
				url: '../data/student_tests.csv'
			};

			return $http(request);
		}
	}
}());