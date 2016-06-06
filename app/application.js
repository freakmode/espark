(function() {
	'use strict';

	var dependencies = [
		'ngMaterial',
		'templates',
		'app.home',
		'app.services'
	];

	angular.module('app', dependencies)
		.config(config);

	config.$inject = [
		'$mdThemingProvider',
		'$urlRouterProvider',
		'$mdIconProvider'];

	function config($mdThemingProvider,
		$urlRouterProvider,
		$mdIconProvider) {
		$urlRouterProvider.otherwise('/');

		// $mdThemingProvider.theme('default');
		$mdIconProvider.iconSet('avatars', '../svg/avatars.svg', 128);
	}
}());