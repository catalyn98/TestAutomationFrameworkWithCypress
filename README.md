<h1 align="center">
Test Automation Framework for UI with Cypress
</h1>
<p align="center">
Cypress, JavaScript, Cucumber, Mochawsome
</p>

<p align="center">
<img src="https://github.com/catalyn98/TestAutomationFrameworkWithCypress/blob/main/cypress.png" />
</p>

# Tech stack
Test Automation Framework for UI with Cypress uses a number of open source projects to work properly:
* [Cypress](https://www.cypress.io) - is a JavaScript-based end-to-end testing tool designed for modern web test automation.
* [JavaScript](https://www.w3schools.com/js/) - is the programming language of the Web.
* [Cucumber](https://cucumber.io) - is a software tool that supports behavior-driven development.
* [Mochawsome](https://www.npmjs.com/package/mochawesome) - is a custom reporter for use with the Javascript testing framework.

# Prerequisites

* Node JavaScript installed.
* Open terminal and install Cypress using *npm install cypress*.

# Running the tests

#### Run single test file in headless mode
Open terminal and type *npx cypress run --spec=’path to file’*.

#### Run all tests 
Open up the framework in Visual Studio Code or similar IDE and just execute in the command line/terminal *npx cypress open*.

# Reporting

**Mochawsome reports**

Install Mochawsome reports using command  *npm install mochawesome*.

# Generate report  

Open terminal and type *npx cypress run --reporter mochawesome*.

# Failed Logs JSON reporter

Install dependencies using command *npm install cypress-failed-log*.

# Example of execution
<p align="center">
<img src="https://github.com/catalyn98/TestAutomationFrameworkWithCypress/blob/main/execute.png" />
</p>

## Versioning

Version 1.0

## Authors
Catalan Catalin
