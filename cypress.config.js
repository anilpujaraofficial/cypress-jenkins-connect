const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ["cypress/e2e/CMS", "cypress/e2e/1-getting-started"],
    experimentalSessionAndOrigin: true,
    redirectionLimit: 500,
    numTestsKeptInMemory: 0,
    projectId: "todo",

    //report
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: "[status]-[datetime]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
