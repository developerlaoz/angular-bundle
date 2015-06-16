/*!
 * Copyright @ 2011 - 2014 Suntec Software(Shanghai) Co., Ltd.
 * All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are NOT permitted except as agreed by
 *  Suntec Software(Shanghai) Co., Ltd.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 */
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