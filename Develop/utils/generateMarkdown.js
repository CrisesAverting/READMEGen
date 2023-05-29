// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== "No specified license"
    ? `![License Badge](https://img.shields.io/badge/License-${license}-blue)`: "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== "No specified license" ? "* [License](#licesnse)" : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "No specified license"
  ? `## License
  License: ${licsense}` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return( 
  `# ${data.title}
  ## Table of Contents

* [Description](#description)
* [Links](#links)
* [Purpose](#purpose)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies)
* [Licence](#license)
* [Credits](#credits)
`);
}

module.exports = generateMarkdown;
