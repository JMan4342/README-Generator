const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdowns = require("./generateMarkdowns");
// const renderLicenseBadge = require("./renderLicenseBadge");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// const questions = [
//     {

//     },
// ]

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is the URL to your GitHub?",
      name: "githubLink",
    },
    {
      type: "input",
      message: "What is the URL of the GitHub repository for your project?",
      name: "repoLink",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "project",
    },
    {
      type: "input",
      message: "Please write a short description of your project.",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    // {
    //   type: "list",
    //   message: "What kind of license should your project have?",
    //   name: "license",
    //   choices: [
    //     ["MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    //     ["APACHE 2.0", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    //     ["GPL 3.0", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"],
    //     ["BSD 3", "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"],
    //     ["None", "None"],
    //   ],
    // },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "command",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "usingRepo",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then(function (user) {
    fs.writeFile("README.md", generateMarkdowns(user), function (err) {
      console.log("User:", user);
    });
  });
