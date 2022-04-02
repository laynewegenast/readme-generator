// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your title!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'description',
            message:'Please provide a description of the project.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your description!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'usage',
            message:'Please provide instructions for usage.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'list',
            name:'license',
            message:'What licensing did you use for your project?',
            choices: ['MIT', 'GNU', 'BSD', 'Apache'],
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'contributions',
            message:'Please elaborate on contribution guidelines for your project.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'title',
            message:'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'tests',
            message:'Please enter testing instructions for your project.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'questions',
            message:'Please enter your GitHub username.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type:'input',
            name:'questions, email',
            message:'Please enter your contact email address.',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
questions();
