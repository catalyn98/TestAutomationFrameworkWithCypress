const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  waitForAnimations: true,
  animationDistanceTreshold: 20,
  defaultCommandTimeout: 5000,
  execTimeout: 60000,
  pageLodTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  video: false,
  failOnStatusCode: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ['*.js', '*.md'],
  },
})
