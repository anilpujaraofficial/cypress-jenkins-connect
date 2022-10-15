const { defineConfig } = require("cypress");
const fs = require("fs");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", {
        checkFileExists(filename) {
          if (fs.existsSync(filename)) {
            return true;
          }
          return false;
        },
      });
    },
    // excludeSpecPattern: ["cypress/e2e/CMS", "cypress/e2e/1-getting-started"],
    experimentalSessionAndOrigin: true,
    redirectionLimit: 500,
    numTestsKeptInMemory: 0,
    projectId: "todo",
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    requestTimeout: 30000,
    //report
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      reportFilename: "[status]-[datetime]-[name]-report",
      overwrite: false,
      html: true,
      json: true,
    },
    //env
    env: {
      MAILSLURP_API_KEY:
        "ff307ad5681c346fac2cba986968b2a575876417c67d034186843d5e79e08f85",
      faker: true,
      testingEnv: "QA",
    },
  },
});
