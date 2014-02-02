module.exports = {
  server: [
    'emberTemplates',
    'compass:server'
  ],
  test: [
    'emberTemplates',
    'compass'
  ],
  dist: [
    'emberTemplates',
    'compass:dist',
    'imagemin',
    'svgmin',
    'htmlmin'
  ]
};
