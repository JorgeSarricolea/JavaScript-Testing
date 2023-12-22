# JavaScript-Testing

This documentation shows one of the famous technical tests as a developer, the added value is to do it with testing.

## Table of Contents

- [JavaScript-Testing](#javascript-testing)
  - [Table of Contents](#table-of-contents)
  - [What is testing?](#what-is-testing)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Contribution](#contribution)
  - [Copyright](#copyright)

## What is testing?

Testing in programming refers to the technique of evaluating the quality of a program or system. The main objective of testing is to identify errors, bugs, or defects in the code, in order to correct them and improve the performance and functionality of the software.

In the context of Node.js, Jest is a popular testing framework used to perform automated testing in JavaScript projects. Jest allows you to define and execute tests for individual functions, modules, and components of an application.

With Jest, you can create test suites that contain multiple individual tests. Each test is described in terms of what is expected to happen in response to a specific input or action. For example, you can write a test that checks that a function correctly adds two numbers, or that a route in a web application returns the expected response.

In summary, Jest is a useful tool for Node.js developers who want to ensure that their code works correctly and without errors before implementing it in production.

## Introduction

In this repository you will find two test examples, the first will help you understand how Jest works and its logic. In the second we will solve a very common exercise in technical tests, the famous FizzBuzz.

## Getting Started

To get started with "JavaScript-Testing", follow these simple steps:

> [!TIP]
> I recommend installing Node Version Manager and using the stable version.

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Check the version of nvm installed
nvm --version

# Install the stable version of Node
nvm install stable

# Check the version of Node installed
node -v
```

### Prerequisites

> [!IMPORTANT] > **Node.js:** Ensure that you have Node.js installed on your system.

Once you have Node.js proceed to create a folder in which you will work your test exercise, you can name it whatever you want. If you're coding in VSCode, open this folder, open the terminal and write:

1. Clone the repository to your local machine:

```
git clone https://github.com/JorgeSarricolea/JavaScript-Testing
```

2. Navigate to the project directory:

```
cd JavaScript-Testing
```

3. Install Node dependencies:

```
npm install
```

4. Initialize Node.js

```
npm init
```

> [!NOTE]
> This will install all the packages needed for your test, after the installation, you will type:

5. Initialize Jest.js

```
npx jest --init
```

> [!NOTE]
> With this you will install the Jest Framework to work your tests. For the installation, a couple of questions will appear, I suggest these answers:

```
Would you like to use Jest when running "test" script in "package.json"? yes

Would you like to use Typescript for the configuration file? no

Choose the test environment that will be usig for testing. node

Do you want Jest to add coverage reports? yes

Wich provider should be used to instrument code for coverage? v8

Automatically clear mock calls and instances between every test? yes
```

> [!NOTE]
> This last option will create a configuration file "jest.config.js". In order not to run the tests continuously we add in package.json in "scripts" the next ine code:

```
"test:watch": "jest --watchAll"
```

6. Finally, when you have your Test Suites configured you can proceed to program some exercise and use the test logic to make a better code. To Run the test:

```
npm run test:watch
```

> [!TIP]
> I already have all the configuration done and the necessary files created to do the tests, I recommend you guide yourself on how I did them, and so try to do yours.

## Contribution

While contributions to this project are welcome. If you would like to contribute, feel free to fork this repository and submit a pull request.

## Copyright

This project was created by [Jorge Sarricolea](https://jorgesarricolea.com). if you have any specific code questions or would like to chat about programming, feel free to contact me on [WhatsApp](https://wa.me/529381095593).
