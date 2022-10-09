// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![MIT](https://img.shields.io/badge/license-MIT-blue)"

  } else if (license === "Apache 2.0") {
    return "![Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-success)"

  } else {
    return ""
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `## License
Details about the MIT license can be found here [mit-license.org](https://mit-license.org/)`

  } else if (license === "Apache 2.0") {
    return `## License
Details about the Apache 2.0 license can be found here [apache.org](https://www.apache.org/licenses/LICENSE-2.0.html)`

  } else {
    return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";

  } else {
    return "- [License](#license)"
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Features](#features)
  - [Installation](#installation)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Testing Instructions](#testing-instructions)
  ${renderLicenseSection(data.license)}
  - [Contact](#contact)
  

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Installation
  ${data.installation}

  ## Contribution Guidelines
  ${data.contributing}

  ## Testing Instructions
  ${data.tests}

  ${renderLicenseLink(data.license)}
  
  ${renderLicenseBadge(data.license)}

  ## Contact
  Contact me if you have any questions!

  GitHub: https://github.com/${data.username}

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
