// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(`${data.projectLicense}` == 'Apache License 2.0'){
    LicenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (`${data.projectLicense}` == 'MIT'){
    LicenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (`${data.projectLicense}` == 'Mozilla Public License 2.0'){
    LicenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  } else if (`${data.projectLicense}` == 'Creative Commons Zero 1.0'){
    LicenseBadge = 'https://licensebuttons.net/l/zero/1.0/80x15.png'
  } else {
    LicenseBadge = ' '
  }
}
renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (`${data.projectLicense}` == 'Apache License 2.0'){
  licenseLink = 'https://opensource.org/licenses/Apache-2.0'
} else if (`${data.projectLicense}` == 'MIT'){
  licenseLink = 'https://opensource.org/licenses/MIT'
} else if (`${data.projectLicense}` == 'Mozilla Public License 2.0'){
  licenseLink = 'https://opensource.org/licenses/MPL-2.0'
} else if (`${data.projectLicense}` == 'Creative Commons Zero 1.0'){
  licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/'
} else {
  licenseLink = ' '
}}
renderLicenseLink();
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (`${data.projectLicense}` == 'No License'){
    return " "
  } else {return `
  ## License
  [![License: ${data.projectLicense}](${data.licenseBadge})](${data.licenseLink})`
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if(`${data.projectLicense}` == 'Apache License 2.0'){
    LicenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (`${data.projectLicense}` == 'MIT'){
    LicenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (`${data.projectLicense}` == 'Mozilla Public License 2.0'){
    LicenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  } else if (`${data.projectLicense}` == 'Creative Commons Zero 1.0'){
    LicenseBadge = 'https://licensebuttons.net/l/zero/1.0/80x15.png'
  } else {
    LicenseBadge = ' '
  };

  if (`${data.projectLicense}` == 'Apache License 2.0'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (`${data.projectLicense}` == 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (`${data.projectLicense}` == 'Mozilla Public License 2.0'){
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else if (`${data.projectLicense}` == 'Creative Commons Zero 1.0'){
    licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else {
    licenseLink = ' '
  };

  return `# ${data.projectName}
  ## Description
  ${data.projectDetails}

  ## Instructions
  ${data.projectInstructions}

  ## Project Link
  ![Link](${data.projectLink})

  ## Contributor List
  ${data.projectContributors}

  ## Project Screenshot
  ![Screenshot](${data.projectScreenshot})

  ## License
  [![License: ${data.projectLicense}](${data.licenseBadge})](${data.licenseLink})`


  // ## License
  // [![License: ${data.projectLicense}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

}

module.exports = generateMarkdown;
