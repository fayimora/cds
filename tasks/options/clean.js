module.exports = {
  clean: {
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          'dist/*',
          '!dist/.git*'
        ]
      }]
    },
    server: '.tmp'
  }
};
