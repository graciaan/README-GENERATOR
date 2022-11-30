//List of required packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//These are the question arrays needed to complete the info for the README
const questions = [
  {
    name: 'projectName',
    message: 'What is the name of your project?',
    type: 'text'
  },
  
  {
    name: 'projectDetails',
    message: 'Please provide details on what the project is about:',
    type: 'text'
  },
  
  {
    name: 'projectInstructions',
    message: 'Please provide instructions on how to use and install the application',
    type: 'text'
  },

  {
    name: 'projectLink',
    message: 'Please provide link to completed project',
    type: 'text'
  },

  {
    name: 'projectContributors',
    message: 'Please list any contributors to your project',
    type: 'text'
  },

  {
    name: 'projectScreenshot',
    message: 'Please include a link to a screenshot of the project',
    type: 'text'
  },
  
  {
    name: 'projectLicense',
    message: 'Please select the licensing used for this project',
    choices: ['Apache License 2.0', 'MIT', 'Mozilla Public License 2.0', 'Creative Commons Zero 1.0', 'No License'],   
    type: 'list'
  }
];

//This function runs the app and also creates the README file
function init() {
  inquirer.prompt(questions).then(function(userInput) {
    const markdown = generateMarkdown(userInput)
    fs.writeFile('README.md', markdown, error => {
      if(error) {
        console.log(error);
      } else {
        console.log("README successfully created!")
      }
    })
  })
};

// Function call to initialize app
init();
