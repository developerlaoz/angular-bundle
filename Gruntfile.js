'use strict';

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			release: {
				src: ['release']
			}
		},
		wiredep: {
			serve: {
				src: ['index.html'],
				ignorePath: /\.\.\//
			}
		},
		useminPrepare: {
			html: 'index.html'
		},
		usemin: {
			html: ['release/index.html'],
		}
	});

	grunt.registerTask('default', ['clean', 'wiredep', 'useminPrepare', 'concat', 'uglify', 'cssmin']);
};