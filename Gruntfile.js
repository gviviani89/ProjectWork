  module.exports = function(grunt) {

    grunt.initConfig({

      less: {
        development: {
          files: {
            'css/style.css': ['css/style.less']
            }
          }
        },

      //jshint: {
        //  files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
          //  options: {
            //  globals: {
              //  jQuery: true
              //}
            //}
          //},<%= jshint.files %>'


      watch: {
        less:{
          files: ['**/*.less'],
          tasks: ['less']
          }
        }
      });



    grunt.loadNpmTasks('grunt-contrib-less');
  //  grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['jshint']);

  };
