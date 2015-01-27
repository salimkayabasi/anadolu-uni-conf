module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        //added reporter for readable error lines
        reporter: require('jshint-stylish')
      },
      scripts: {
        src: [
          'app/**/*.js',
          'app/**/*.json',
          'config/**.js',
          'test/**',
          '*.js',
          '*.json',
          '!package.json'
        ]
      }
    }
  });
  grunt.registerTask('default', ['jshint']);
};