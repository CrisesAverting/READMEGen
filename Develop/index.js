// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Repo Title',
    message: 'What is the Title of the repository ',
},
    {
        type: 'input',
        name: 'Description',
        message: 'Describe the purpose of the repository',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter the installation command for your app to install required packages',
    },
    {
        type: 'input',
        name: 'repo_Contributor',
        message: 'Enter the contributor requirements',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your contact Email',
    },];


    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
