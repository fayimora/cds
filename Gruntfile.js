// Generated on 2014-01-22 using generator-ember 0.8.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    var _ = grunt.util._,
        path = require("path");
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    // require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    require('load-grunt-config')(grunt, {
      configPath: '/Users/fayimora/misc/cds/tasks/options',//path.join(__dirname, 'tasks/options'),
      loadGruntTasks: true,
      init: true
    });

    // var config = _.extend({},
    //     require('load-grunt-config')(grunt, {
    //         configPath: '/Users/fayimora/misc/cds/tasks/options',//path.join(__dirname, 'tasks/options'),
    //         loadGruntTasks: true,
    //         init: false
    //     })
    // );

  // grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder
  // config.env = process.env;

    // grunt.initConfig({
    //     yeoman: yeomanConfig,
    //     // not used since Uglify task does concat,
    //     // but still available if needed
    //     /*concat: {
    //         dist: {}
    //     },*/
    //     // not enabled since usemin task does concat and uglify
    //     // check index.html to edit your build targets
    //     // enable this task if you prefer defining your build targets here
    //     /*uglify: {
    //         dist: {}
    //     },*/
    //     // Put files not handled in other tasks here
    // });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'replace:app',
            'concurrent:server',
            'neuter:app',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'replace:app',
        'concurrent:test',
        'connect:test',
        'neuter:app',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'replace:dist',
        'useminPrepare',
        'concurrent:dist',
        'neuter:app',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);

  // grunt.initConfig(config);
};
