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
    excludeSpecPattern: ["cypress/e2e/CMS", "cypress/e2e/1-getting-started"],
    experimentalSessionAndOrigin: true,
    redirectionLimit: 500,
    // numTestsKeptInMemory: 0,
    projectId: "hwbhq7",
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    requestTimeout: 30000,
    // viewportHeight: 900,
    // viewportWidth: 1440,

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
        "e8897a90e22f400dc20acd65fee004cad35bb43dd673a40b5a24d04f701bbe9d",
      MAILOSAUR_API_KEY: "QybQ5TaFa5QuqKe2",
      faker: true,
      testingEnv: "QA",
      // grepFilterSpecs: true,
      // grepOmitFiltered: true,
    },
  },
});
