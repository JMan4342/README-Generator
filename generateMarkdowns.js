// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseName) {
  const licenseBadge = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "APACHE 2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GPL 3.0":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3":
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "None": "",
  };
  return licenseBadge[licenseName]
}

// TODO: Create a function to generate markdown for README
function generateMarkdowns(data) {
  return `
  # ${data.project}
  
  ${renderLicenseBadge(data.license)}

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
  Below you will find screenshots and a video showing the application in action.
  

  ## License
  ${data.license}
  
  
  ## Questions
  If you have any questions, I can be reached on my GitHub at [${data.username}](${data.githubLink}).

  You can also reach me by email at ${data.email}.
  









`;
}

module.exports = generateMarkdowns;
