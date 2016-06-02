(function () {
	'use strict';

	angular.module('app.home')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl(domainService) {
		domainService.get()
			.then(function(response) {
				console.log(response);
			});
	}
}());