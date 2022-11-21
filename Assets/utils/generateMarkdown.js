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
function generateMarkdown(data) {
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
`;
}

module.exports = generateMarkdown;
