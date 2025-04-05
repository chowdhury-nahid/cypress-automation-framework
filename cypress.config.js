const { defineConfig } = require('cypress');
const fs = require('fs'); // Import the fs module
const path = require('path'); // Import the path module (optional, for cleaner paths)

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Clean the reports folder before running tests
      const reportsDir = path.join(__dirname, 'cypress/reports');
      if (fs.existsSync(reportsDir)) {
        fs.rmSync(reportsDir, { recursive: true, force: true });
        console.log('Cleaned reports folder');
      }

      // Read the credentials from the JSON file
      const credentials = JSON.parse(fs.readFileSync('C:\\cypress_config\\credentials.json', 'utf-8'));

      // Add the credentials to Cypress environment variables
      config.env.username = credentials.username;
      config.env.password = credentials.password;

      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory for reports
      overwrite: true,            // Do not overwrite existing reports
      html: false,                 // Do not generate HTML directly
      json: true                   // Generate JSON reports
    },
    
  },
});
