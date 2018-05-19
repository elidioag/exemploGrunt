module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    availabletasks: {           // task
      tasks: {}               // target
    },
    bower: {
      dev: {
        dest: 'dest/path'
      },
      install: {

      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass/',
          src: ['*.scss'],
          dest: 'html/dist/',
          ext: '.css'
        }]
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist/',
        src: '**',
        dest: 'html/dist/bootstrap'
      },
      jquery: {
        expand: true,
        cwd: 'bower_components/jquery/dist/',
        src: '*',
        dest: 'html/dist/jquery'
      },
      jquerymaskmoney: {
        expand: true,
        cwd: 'bower_components/jquery-maskmoney/dist/',
        src: '*',
        dest: 'html/dist/jquery-maskmoney'
      }             
    },
    clean: {
      txt: ['*.txt']
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'html/dist',
          src: ['*.css', '!*.min.css'],
          dest: 'html/dist',
          ext: '.min.css'
        }]
      }
    }        
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');  

  grunt.registerTask('default', ['availabletasks', 'copy', 'jshint', 'sass', 'cssmin', 'clean']);  
};