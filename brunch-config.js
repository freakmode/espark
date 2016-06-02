module.exports = {
	modules: {
		definition: 'amd',
		wrapper: 'amd'
	},
	npm: {
		enabled: false
	},
	files: {
		javascripts: { 
			joinTo: {
				'scripts/app.js': /^app/,
				'scripts/vendor.js': /^bower_components/
			},
			order: {
				before: [
					'app/**/*.module.js'
				]
			}
		},		
		stylesheets: { 
			joinTo: {
				'styles/app.css': /^app/,
				'styles/vendor.css': /^bower_components/
			}
		},
		templates: { joinTo: 'scripts/templates.js' }
	},
	server: {
		run: true
	}
}