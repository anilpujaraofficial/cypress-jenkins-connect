const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    experimentalSessionAndOrigin: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    redirectionLimit: 500,
    numTestsKeptInMemory: 0,
  },
});
