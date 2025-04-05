const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Read the credentials from the JSON file. Example file is available under fixtures folder.
      const credentials = JSON.parse(fs.readFileSync('C:\\cypress_config\\credentials.json', 'utf-8'));

      // Add the credentials to Cypress environment variables
      config.env.username = credentials.username;
      config.env.password = credentials.password;

      return config;
    },
    testIsolation: false,
  },
});
