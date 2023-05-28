<h1 align="center">
  Test Automation Framework for UI with Cypress
</h1>
<p align="center">
  JavaScript, Cypress, Cucumber, Mochawesome
</p>

<p align="center">
  <img src="https://github.com/catalyn98/TestAutomationFrameworkWithCypress/blob/main/cypress.png" />
</p>

# Tech stack
Test Automation Framework for UI with Cypress uses a number of open source projects to work properly:
* [JavaScript](https://www.w3schools.com/js/) - is the programming language of the Web.
* [Cypress](https://www.cypress.io) - is a JavaScript-based end-to-end testing tool designed for modern web test automation.
* [Cucumber](https://cucumber.io) - is a software tool that supports behavior-driven development.
* [Mochawesome](https://www.npmjs.com/package/mochawesome) - is a custom reporter for use with the Javascript testing framework.

# Prerequisites
* To use and work with Cypress, ensure that you have NodeJS installed on your machine, if you don't have, you can download it from [here](https://nodejs.org/).
* Once NodeJS is installed, open the terminal and run the following command to install Cypress:
`npm install cypress`, this command will download and install Cypress on your system, allowing you to use it for test automation.

# Running the tests
#### Run all tests 
Open up the framework in Visual Studio Code or similar IDE and just execute in the command line/terminal:
- `npx cypress open`, this command will open the Cypress Test Runner, a graphical user interface provided by Cypress for running and managing the test suite.

#### Run a single test file in headless mode
Open the command line/terminal and type:
- `npx cypress run --spec=path to the file`. Cypress will run the specified test file(s) in headless mode. It will execute the tests using the browser configured in the Cypress project.

# Reporting
### Mochawsome reports
Mochawesome is a popular test reporter for the Mocha testing framework. It generates detailed and visually appealing HTML reports for Mocha test runs, making it easier to analyze and understand the test results.
Use npm to install the Mochawesome package globally or locally within your project. Run the following command: `npm install mochawesome`.
### Generate report  
To generate a report using Mochawesome, open command line/terminal and type: `npx cypress run --reporter mochawesome`.

# Failed Logs JSON reporter
Install dependencies using command `npm install cypress-failed-log`.

# Example of execution
<p align="center">
  <img src="https://github.com/catalyn98/TestAutomationFrameworkWithCypress/blob/main/execute.png" />
</p>
