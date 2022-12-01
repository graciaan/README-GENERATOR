//created one function that generates the markdown and also generates the badge and license link.

function generateMarkdown(data) {
  if(`${data.projectLicense}` == 'Apache License 2.0'){
    licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
  } else if (`${data.projectLicense}` == 'MIT'){
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
  } else if (`${data.projectLicense}` == 'Mozilla Public License 2.0'){
    licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
  } else if (`${data.projectLicense}` == 'Creative Commons Zero 1.0'){
    licenseBadge = 'https://licensebuttons.net/l/zero/1.0/80x15.png'
  } else {
    licenseBadge = ' '
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
  [![License: ${data.projectLicense}](${licenseBadge})](${licenseLink})`

}

module.exports = generateMarkdown;
