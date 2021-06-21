const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdowns = require("./generateMarkdowns");

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
