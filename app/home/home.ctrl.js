(function () {
	'use strict';

	angular.module('app.home')
		.controller('HomeCtrl', HomeCtrl);

	function HomeCtrl(domains, students) {
		var vm = this;

		vm.avatar;
		vm.domains;
		vm.students = students;

		vm.getIcon = getIcon;
		vm.selectStudent = selectStudent;

		selectStudent(vm.students[0]);

		function selectStudent(student) {
			vm.activeStudent = student;
			generateAvatar();
			generateLearningPath();
		}

		function getIcon(value) {
			return (!isNaN(parseInt(value, 10))) ? 'filter_' + value : 'filter_none';
		}

		function generateAvatar() {
			var max = 16;
			var min = 1;
			var avatar = (Math.floor(Math.random() * (max - min + 1)) + min);

			vm.avatar = 'avatars:svg-' + avatar;
		}

		function generateLearningPath() {
			var grade;
			var domain;
			var domainIndex;

			vm.domains = JSON.parse(JSON.stringify(domains));

			for(var key in vm.activeStudent) {
				if(key !== 'Student_Name') {
					grade = vm.activeStudent[key];

					while(grade >= 1) {
						grade--;
						domain = vm.domains[grade];
						domainIndex = domain.indexOf(key);

						if(domainIndex >= 0) {
							domain.splice(domainIndex, 1);
						}
					}
				}
			}
		}
	}
}());