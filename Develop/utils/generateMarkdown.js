// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== "No specified license"
    ? `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== "No specified license" ? "* [License](#license)" : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "No specified license"
    ? `## License
  License: This repo is covered under a ${license}` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return (
    `# ${data.title}
${renderLicenseBadge(data.license)}
  ## Table of Contents

* [Description](#description)
* [Links](#links)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Licence](#license)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
The contributing requirments for this repository are: ${data.repo_Contributor}

${renderLicenseSection(data.license)}

## Tests
${data.testing}
## Questions
GitHub profile: [${data.github}](https://github.com/${data.github})
For addtional questions please email me at ${data.Email}
`);
}

module.exports = generateMarkdown;
