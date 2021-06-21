// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdowns(data) {
  return `
  # ${data.project}
  
  ## ${data.badge}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [License](#license)

  ## Installation
  ${data.command}
  
  ## Usage
  ${data.usingRepo}

  ## Contributing
  ${data.contributing}

  You can find the project at ${data.repoLink}.
  
  ## Testing
  
  ## License
  ${data.license}
  
  ## Questions
  If you have any questions, I can be reached on my GitHub at [${data.username}](${data.githubLink}).

  You can also reach me by email at ${data.email}.
  









`;
}

module.exports = generateMarkdowns;
