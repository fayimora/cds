var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});

module.exports = {
  watch: {
    emberTemplates: {
      files: '<%= yeoman.app %>/templates/**/*.hbs',
      tasks: ['emberTemplates']
    },
    compass: {
      files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
      tasks: ['compass:server']
    },
    neuter: {
      files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
      tasks: ['neuter']
    },
    livereload: {
      options: {
        livereload: LIVERELOAD_PORT
      },
      files: [
        '.tmp/scripts/*.js',
        '<%= yeoman.app %>/*.html',
        '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  }
};
