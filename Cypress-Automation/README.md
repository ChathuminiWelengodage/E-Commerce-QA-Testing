# Cypress Automation Testing

## Project Overview

This project contains automated UI tests for the [Automation Exercise](https://automationexercise.com/) e-commerce website using Cypress and JavaScript.

The tests cover important e-commerce functionalities, including homepage navigation, product browsing, product search, shopping cart operations, login and signup forms, and subscription functionality.

## Tools and Technologies

- Cypress 16.3.0
- JavaScript
- Node.js
- npm
- Google Chrome

## Project Structure

```text
Cypress-Automation/
│
├── cypress/
│   └── e2e/
│       └── homepage.cy.js
│
├── Screenshots/
│   └── Cypress-Test-Execution.png
│
├── Cypress-Automation-Test-Cases.md
├── Cypress-Test-Execution-Report.md
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Test Coverage

A total of 17 automated test cases were developed.

The tests cover:

- Homepage loading and navigation
- Product page navigation
- Product search
- Adding and removing products from the cart
- Product quantity verification
- Product details
- Contact Us page
- Email subscription
- Login and signup forms
- Product categories

## Test Execution Results

| Status | Count |
|---|---:|
| Total Test Cases | 17 |
| Passed | 17 |
| Failed | 0 |

**Overall Result: PASS**

## How to Run the Tests

### 1. Install Node.js

Install Node.js if it is not already installed.

### 2. Install Dependencies

Open a terminal in the `Cypress-Automation` folder and run:

```bash
npm install
```

### 3. Open Cypress

```bash
npx cypress open
```

### 4. Run the Tests

Select E2E Testing, choose your browser, and open:

`cypress/e2e/homepage.cy.js`

## Test Execution Evidence

See the `Screenshots` folder for the Cypress test execution screenshot.

## Test Website

https://automationexercise.com/

## Project Type

Individual QA Portfolio Project

