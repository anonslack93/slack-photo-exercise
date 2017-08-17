module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai-sinon', 'chai'],

    files: [
      // PhantomJS doesn't support things like native Promises or Fetch,
      // so we need to add Babel's polyfills and the standard fetch polyfill.
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/whatwg-fetch/fetch.js',
      {pattern: 'test/**/*.test.js', watched: false}
    ],

    preprocessors: {
      'test/**/*.test.js': ['webpack']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
              }
            }
          }
        ]
      }
    },

    webpackMiddleware: {
      // Comment this rule out to get detailed reporting
      // on what files webpack is bundling.
      stats: 'errors-only'
    },

    port: 9876,

    reporters: ['spec'],

    colors: true,

    browsers: ['PhantomJS'],

    plugins: [
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-chai-sinon'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};
