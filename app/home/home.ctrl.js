(function () {
	'use strict';

	angular.module('app.home')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl(students, domains) {
		var vm = this;

		vm.students = students;
		vm.activeStudent = vm.students[0];

		vm.selectStudent = selectStudent;
		vm.getIcon = getIcon;

		function selectStudent(student) {
			vm.activeStudent = student;
		}

		function getIcon(value) {
			return (!isNaN(parseInt(value, 10))) ? 'filter_' + value : 'filter_none';
		}

		function getLearningPath(value) {

		}
	}
}());