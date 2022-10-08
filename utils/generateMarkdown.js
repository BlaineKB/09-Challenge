// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `## License
    Details about the MIT license can be found here: [mit-license.org](https://mit-license.org/)`

  } else if (license === "Apache 2.0") {
    return `## License
    Details about the Apache 2.0 license can be found here: [apache.org](https://www.apache.org/licenses/LICENSE-2.0.html)`

  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";

  } else {
    return " [License](#license)"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
