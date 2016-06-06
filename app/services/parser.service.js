(function () {
	'use strict';

	angular.module('app.services')
		.factory('parserService', parserService);

	parserService.$inject = ['$http'];

	function parserService($http) {
		var service = {
			parseHeader: parseHeader,
			parseRow: parseRow
		};

		return service;

		function parseHeader(csv) {
			var lines = csv.split('\n');
			var header = lines.shift().split(',');
			var values;
			var data = [];
			var totalLines = lines.length;


			for(var i = 0; i < totalLines; i++) {
				var obj = {};

				values = lines[i].split(',');

				for(var j = 0; j < values.length; j++) {
					obj[header[j]] = values[j];
				}

				data.push(obj);
			}

			return data;
		}

		function parseRow(csv) {
			var lines = csv.split('\n');
			var totalLines = lines.length;
			var parts = [];
			var data = {};

			for(var i = 0; i < totalLines; i++) {
				parts = lines[i].split(',');
				data[parts[0]] = parts.splice(1, parts.length);

				if(parts[0] === 'K') {
					data['0'] = data['K'];
					delete data['K'];
				}
			}

			return data;
		}
	}
}());