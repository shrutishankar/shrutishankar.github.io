// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'bower_components/**/*.js', included: false },
      { pattern: './src/test-main.js' },

      { pattern: 'src/**/*.js', included: false },
      { pattern: 'src/**/*.html', included: false }
    ],


    // list of files to exclude
    exclude: [
      './src/main.js'
    ],


    // preprocess matching files before serving them to the browser
    preprocessors: {
      'src/**/*.js': 'coverage'
    },


    // test results reporter to use
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    browsers: ['Chrome', 'Firefox', 'IE', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
