// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          message: 'What is the title of your Project',
          name: 'username',
        },
        {
          type: 'input',
          message: 'What is the description of your Project',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What is the installation of your Project',
          name: 'installation',
        },
        {
            type: 'input',
            message: 'What are your instructions for your Project',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'What is your usage information of your Project',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contribution guidelines for your Project',
            name: 'guidelines',
        },
        {
            type: 'input',
            message: 'What are your test instructions for your Project',
            name: 'Test_instructions',
        },
        {
            type: 'list',
            message: 'Choose your license for your application',
            name: 'license',
            choices: [
                 "{example-1}",
                 "{example-2}", 
                 "{example-3}"
            ]
        },
        {
            type: 'input',
            message: 'What is your usage information of your Project',
            name: 'username',
         
        },
        {
            type: 'input',
            message: 'What is your usage information of your Project',
            name: 'username',
         
        },
        {
            type: 'input',
            message: 'What is your usage information of your Project',
            name: 'username',
         
        },






        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile( fileName, data, (error, data) =>
  error ? console.error(error) : console.log(data)
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {  console.log('\nOrder receipt:'); 
    writeToFile("index.html", answers)
    console.log(JSON.stringify(answers, null, '  '));});
}

// Function call to initialize app
init();

