module.exports = {
    neuter: {
        app: {
            options: {
                filepathTransform: function (filepath) {
                    return 'app/' + filepath;
                }
            },
            src: '<%= yeoman.app %>/scripts/app.js',
            dest: '.tmp/scripts/combined-scripts.js'
        }
    }
};
