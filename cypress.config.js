const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";


module.exports = defineConfig({
  e2e: {
    watchForFileChanges : false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    allureWriter(on, config);
    return config;
    },
  },
});
