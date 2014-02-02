module.exports = {
    emberTemplates: {
        options: {
            templateName: function (sourceFile) {
                var templatePath = 'app/templates/';
                return sourceFile.replace(templatePath, '');
            }
        },
        dist: {
            files: {
                '.tmp/scripts/compiled-templates.js': '<%= yeoman.app %>/templates/{,*/}*.hbs'
            }
        }
    }
};
