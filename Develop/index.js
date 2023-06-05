// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the Title of the repository ',
},
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose of the repository',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation command for your app to install required packages',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter permitted uses of the repo',
    },
    {
        type: 'input',
        name: 'repo_Contributor',
        message: 'Enter the contributor requirements',
    },
    {
        type: "list",
        name: "license",
        message: "Please select license: ",
        choices: ["Apache", "BSD V3", "Creative Commons Attribution 4.0", "MIT", "Open Software License 3.0",  "No license"],
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter instructions for user testing',
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

//write data to file and confirm data was written to console
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your README was generated with your specifications")
    );
}

// TODO: Create a function to initialize app
function init() {
    // request user specifications with inquirer
    inquirer.prompt(questions).then((specs) => {
        writeToFile("../createdFiles/README.md", generateMarkdown(specs));
    });
}

// Function call to initialize app
init();
