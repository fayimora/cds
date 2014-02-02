module.exports = {
  replace: {
    app: {
      options: {
        variables: {
          ember: 'bower_components/ember/ember.js',
          ember_data: 'bower_components/ember-data/ember-data.js'
        }
      },
      files: [
        {src: '<%= yeoman.app %>/index.html', dest: '.tmp/index.html'}
      ]
    },
    dist: {
      options: {
        variables: {
          ember: 'bower_components/ember/ember.prod.js',
          ember_data: 'bower_components/ember-data/ember-data.prod.js'
        }
      },
      files: [
        {src: '<%= yeoman.app %>/index.html', dest: '.tmp/index.html'}
      ]
    }
  }
};
