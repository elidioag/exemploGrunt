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
    },
    bower: {
      install: {
        options: {
          targetDir: 'bower_components',
          install: true,
        }
      }
    },
    concat: {
      js: {
        src: ['html/dist/bootstrap/js/*.js','html/dist/jquery/*.js', 'html/dist/jquery-maskmoney/*.js', '!*.min.js', '!*.min.js.map'],
        dest: 'html/dist/all.js',
      },
      css: {
        src: ['html/dist/bootstrap/css/*.css', 'html/dist/*.css', '!*.min.css', '!*.min.css.map'],
        dest: 'html/dist/all.css',
      }      
    },    
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-checkbranch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['availabletasks', 'copy', 'jshint', 'sass', 'cssmin', 'clean', 'checkbranch:master', 'bower', 'concat']);  
};