# EPAM Final Task: UI Automation with WebdriverIO

This repository contains the final task for the EPAM UI Automation course.
The project implements End-to-End (E2E) testing for the [SauceDemo](https://www.saucedemo.com/) application.

## Test Scenarios (Use Cases)
The automation suite covers the following core business flows:
- **UC-1: Product Details Verification:** Logs in, captures the price and description of a specific item ("Sauce Labs Fleece Jacket") from the inventory page, navigates to the details page to verify the data matches, adds the item to the cart, and asserts the cart badge updates correctly.
- **UC-2: Footer & Social Links:** Logs in, scrolls to the footer, validates the visibility of social media icons (Twitter, Facebook, LinkedIn), clicks the LinkedIn link, switches to the newly opened tab, and verifies the correct URL is loaded.

## Technologies Used
- **Framework:** WebdriverIO (v9)
- **Pattern:** Page Object Model (POM)
- **Assertion Library:** Mocha / Chai (Expect)
- **Browsers:** Firefox, Microsoft Edge (Parallel execution)
- **Code Style:** ESLint (Airbnb configuration) + Husky pre-commit hooks

## Setup & Installation
1. Clone the repository.
2. Ensure you have Node.js installed (v18 or higher recommended).
3. Install dependencies:
```bash
npm install
```

## How to Run the Tests
To execute the test suite in parallel across Firefox and Edge, run:
```bash
npm run test
```

## Linting
To check the code for style and syntax errors using ESLint (Airbnb style), run:
```bash
npm run lint
```

## Reporting
This project uses Allure Reporter to generate detailed, visual HTML test reports.
After running the tests (which generates the raw data in the allure-results folder), you can build and open the interactive report by running:
```bash
npx allure generate allure-results --clean && npx allure open
```

## Features Implemented
- **Custom Logger:** Tracks the flow and specific products being verified in the console.
- **Dynamic Content:** Validates product details (Price, Description) between Inventory and Details pages.
- **Cross-Browser:** Runs smoothly on both Edge and Firefox simultaneously.
- **Locators:** Utilizes a robust mix of CSS Selectors and XPath.


