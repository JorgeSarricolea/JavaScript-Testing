# JavaScript-Testing
This documentation shows one of the famous technical tests as a developer, the added value is to do it with testing.

## What is testing?
Testing in programming refers to the technique of evaluating the quality of a program or system. The main objective of testing is to identify errors, bugs, or defects in the code, in order to correct them and improve the performance and functionality of the software.

In the context of Node.js, Jest is a popular testing framework used to perform automated testing in JavaScript projects. Jest allows you to define and execute tests for individual functions, modules, and components of an application.

With Jest, you can create test suites that contain multiple individual tests. Each test is described in terms of what is expected to happen in response to a specific input or action. For example, you can write a test that checks that a function correctly adds two numbers, or that a route in a web application returns the expected response.

In summary, Jest is a useful tool for Node.js developers who want to ensure that their code works correctly and without errors before implementing it in production.

## Description
In this repository you will find two test examples, the first will help you understand how Jest works and its logic. In the second we will solve a very common exercise in technical tests, the famous FizzBuzz.

## Getting Started

First of all, make sure you have Node installed on your computer or go to [Download | Node.js](https://nodejs.org/en/download)

```
Node version
```

Once you have Node.js proceed to create a folder in which you will work your test exercise, you can name it whatever you want. If you're coding in VSCode, open this folder, open the terminal and write:

```
npm init
```

This will install all the packages needed for your test, after the installation, you will type:

```
npx jest --init
```

With this you will install the Jest Framework to work your tests. For the installation, a couple of questions will appear, I suggest these answers:

```
Would you like to use Jest when running "test" script in "package.json"? yes
```
```
Would you like to use Typescript for the configuration file? no 
```
```
Choose the test environment that will be usig for testing. node
```
```
Do you want Jest to add coverage reports? yes
```
```
Wich provider should be used to instrument code for coverage? v8
```
```
Automatically clear mock calls and instances between every test? yes
```

This last option will create a configuration file "jest.config.js". In order not to run the tests continuously we add in package.json in "scripts" the next ine code:
```
"test:watch": "jest --watchAll"
```
Finally, when you have your Test Suites configured you can proceed to program some exercise and use the test logic to make a better code. To Run the test:

```
npm run test:watch
```
