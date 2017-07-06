// Export Grunt Module to Grunt Command
module.exports = function(grunt) {
 

// Configure the Plugins
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	clean: ['release'],
	cssmin: {
  options: {
    mergeIntoShorthands: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'release/output.css': ['stylesheet/*.css']
		
    }
  }
},
	uglify: {
    admintarget: {
      files: {
        'release/output.min.js': ['js2/*.js']
      }
    },
		admintarget2: {
      files: {
        'release/output2.min.js': ['abcd/*.js']
      }
    }
  },
	watch: {
  scripts: {
    files: ['**/*.*'],
    tasks: ['clean','cssmin','uglify:admintarget'],
    options: {
      spawn: false,
    },
  },
}
});
	
// Load the Plugin
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
// Register the Task to run 	
  grunt.registerTask('default', ['watch']);
	//grunt.registerTask('default', ['clean','cssmin','uglify:admintarget']);
};
