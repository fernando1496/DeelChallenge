# DeelChallenge


Deel challenge and boilerplate.


## Contents of this file
---------------------

* Project description
* Project Setup
  * Pre-requisites
  * Opening the project
  * Installing dependencies and tools

* Project execution guide
    * Execute the tests

* Reports


## Project setup
---------------------
### Pre-requisites:
* Install nodeJS from https://nodejs.org/en/download and make sure to add `NODE_HOME` env variable for NodeJS
* Install JDK from https://adoptium.net/
* Set `JAVA_HOME` env variable
* CircleCI account
* Docker if you are going to create a custom image


### Opening the project
* Clone the repo from bitbucket
* Open the DeelChallenge folder

### Installing dependencies and tools:
* Open a terminal and run `npm install`
* Install allure-command line tools `npm install -g allure-commandline --save-dev`


## Project Execution
---------------------

### Execute the tests
To execute tests in all browsers you can use:
* Run in terminal `npx playwright test`

To execute tests in a specific browser you can use:
* Run in terminal `npx playwright test --project=chrome`


## Reports
---------------------
After running `npx playwright test` a folder named `allure-results` will be generated so to generate report you need to follow:
* To generate the reports use int terminal: `allure generate allure-results --clean`
* To open the reports you can run in terminal: `allure open`
