# Cypress Automation Framework

![Cypress CI](https://github.com/chowdhury-nahid/cypress-automation-framework/actions/workflows/cypress-ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

This repository contains an end-to-end (E2E) test automation framework built using [Cypress](https://www.cypress.io/). The framework is designed to test web applications efficiently and includes features like reusable page objects, facades, and detailed test reports.

---

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [CI/CD Integration](#cicd-integration)
- [Project Structure](#project-structure)
- [npm Scripts](#npm-scripts)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Cypress Framework**: Built on Cypress for fast and reliable end-to-end testing.
- **Page Object Model (POM)**: Organized structure for reusable and maintainable test code.
- **Facades**: Simplified test flows using facades for complex workflows.
- **Mochawesome Reports**: Generates detailed and visually appealing test reports.
- **CI/CD Integration**: Ready-to-use GitHub Actions workflow for continuous integration.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A web browser (e.g., Chrome, Edge)

---

## Dependencies

- [Cypress](https://www.cypress.io/): End-to-end testing framework.
- [Mochawesome](https://www.npmjs.com/package/mochawesome): Test report generator.
- [Node.js](https://nodejs.org/): JavaScript runtime for running Cypress.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chowdhury-nahid/cypress-automation-framework.git
   cd cypress-automation-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add a `credentials.json` file to your `C:\cypress_config` directory with the following structure:
   ```json
   {
     "username": "your_username",
     "password": "your_password"
   }
   ```

---

## Running Tests

### Run All Tests
To execute all tests in headless mode:
```bash
npx cypress run
```

### Open Cypress Test Runner
To open the Cypress Test Runner for debugging:
```bash
npx cypress open
```

### Run Specific Tests
To run a specific test file:
```bash
npx cypress run --spec "cypress/e2e/test_userCheckout_fullPath.cy.js"
```

---

## Test Reports

The framework uses [Mochawesome](https://www.npmjs.com/package/mochawesome) to generate test reports.

1. After running tests, reports are generated in the `cypress/reports` directory.
2. To view the HTML report, open the `mochawesome.html` file in your browser.

---

## CI/CD Integration

This project includes a GitHub Actions workflow for continuous integration:

1. The workflow is triggered on every `push` or `pull_request` to the `main` branch.
2. It installs dependencies, runs tests, and uploads artifacts (e.g., videos, screenshots, and reports) for debugging.

---

## Project Structure

```plaintext
cypress-automation-framework/
├── cypress/
│   ├── e2e/                     # Test files
│   ├── support/
│   │   ├── facade/              # Facades for complex workflows
│   │   ├── pages/               # Page Object Model (POM) files
│   │   ├── e2e.js               # Global configurations and hooks
│   └── reports/                 # Test reports (excluded from Git)
├── .github/
│   └── workflows/
│       └── cypress-ci.yml       # GitHub Actions workflow
├── .gitignore                   # Ignored files and directories
├── cypress.config.js            # Cypress configuration
└── README.md                    # Project documentation
```

---

## npm Scripts

The following npm scripts are available:

- **Run Tests**:
  ```bash
  npm test
  ```
- **Generate Reports**:
  ```bash
  npm run report
  ```
- **Clean Reports**:
  ```bash
  npm run clean:reports
  ```

---

## Scripts

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Known Issues

- Ensure the `credentials.json` file is correctly placed in `C:\cypress_config` for tests to run successfully.
- Reports may not generate if the `cypress/reports` directory is missing. Ensure it exists before running tests.

---

## Contact

For questions or feedback, please contact:

- **Name**: Nahid Chowdhury
- **Email**: chowdhury.nahid@hotmail.com
- **GitHub**: [My GitHub Profile](https://github.com/chowdhury-nahid)