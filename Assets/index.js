// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    message: 'Please provide instructions on how to use the application',
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
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();
