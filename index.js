// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
function init() {}
// Function call to initialize app
init();

const fs = require('fs');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

prompt ([
  {
    type: 'input',
    message: 'What is the title of your project',
    name: 'title',
    default: 'README Generator',
  },
  {
    type: 'input',
    message: 'Enter a description for your project',
    name: 'description',
    default: 'This project uses inquirer to promt the user with questions in the terminal that will generate a high-quality README',
  },
  {
    type: 'input',
    message: 'Describe the installation instructions of your project',
    name: 'installation',
    default: 'Run node index.js in the terminal to be prompted by the program and fill out each question as desired',
  },
  {
    type: 'input',
    message: 'Enter a usage for your application',
    name: 'usage',
    default: 'With this application users can fill out pre-determined fields via promtps in the terminal. The application will use the users inputs to generate a professional README',
  },
  {
    type: 'input',
    message: 'List any contributors of your project',
    name: 'contributing',
    default: 'N/A',
  },
  {
    type: 'input',
    message: 'Enter your GitHub URL',
    name: 'github',
    default: 'https://github.com/ZacharyDOTpy',
  },
  {
    type: 'input',
    message: 'Enter your Email',
    name: 'email',
    default: 'myEmail@something.com',
  }
])