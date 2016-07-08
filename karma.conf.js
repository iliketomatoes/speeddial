module.exports = function(config) {
    config.set({
        basePath: '',

        // Include the test and source files
        files: [
            'dist/*.js',
            'test/vendor/*.js',
            {
                pattern: 'test/templates/**/*'
            },
            'test/runner.js',
            'test/specs/*js'
        ],

        reporters: ['mocha'],

        browsers: ['PhantomJS', 'Chrome'],
        singleRun: true,
        autoWatch: false,

        frameworks: ['mocha', 'chai', 'fixture'],

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-fixture',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-html2js-preprocessor'
        ],

        browserNoActivityTimeout: 120000,

        preprocessors: {
            'test/templates/*.html': ['html2js']
        }
    });
};
