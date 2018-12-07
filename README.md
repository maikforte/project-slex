# Project SLEX

## Table of Contents
1. [What the hell?](#what-the-hell)
1. [Testing](#testing)
1. [Linting](#linting)
1. [Quickstart](#quickstart)

### What the hell?
Okay, I'm tired of re-creating new ExpressJS back-end over and over again when working on a project.

It's called SLEX because the project is Express... JS.... He he he.

### Testing
Unit testing is very very simple. The project uses [Mocha](https://mochajs.org/) - a very very simple and lightweight test framework that runs on Node and browser. [Chai](https://mochajs.org/) - for the assertion library

To run the test, simply navigate to the project folder and run `npm run test`

### Linting
Lint configuration is based-off of [AirBnB Lint Config](https://www.npmjs.com/package/eslint-config-airbnb) with the alteration of the indention set to `4 spaces`.

To run the lint, navigate to the project folder and run `npm run lint`
To fix some of the linting errors, run `npm run lint-fix`

### Quickstart
1. Fork the repo
1. Navigate to the project folder
1. Run `npm install`
1. Run `npm start`
1. Open your browser to `http://localhost:3000/hello-world` or `http://localhost:3000/hello-world/Michael`
