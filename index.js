const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern= require('./lib/intern');
const htmlGenerator = require('./src/htmlGenerator');

const team = [];

const manager = [
    {
        type: 'input',
        message: 'Manager\'s Name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'You should write a name';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Manager\'s email: ',
        name: 'email',
        validate: function(email){
                validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (!validate) {
                    return 'Please, enter a valid email';
                } else {
                    return true;
                }
            }            
    },
    {
        type: 'input',
        message: 'Manager\'s office number: ',
        name: 'office',
        validate: office => {
            if (isNaN(office)){
                return 'Please, enter a valid office number (numeric)';
            } else {
                return true;
            }            
        }
    }
];

const engineer = [
    {
        type: 'input',
        message: 'Engineer\'s Name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'You should write an engineer\'s name';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }            
        }
    },
    {
        type: 'input',
        message: 'Engineer\'s email: ',
        name: 'email',
        validate: function(email){
            validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (!validate) {
                return 'Please, enter a valid email';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'GitHub user name: ',
        name: 'gitHub',
        validate: gitHub => {
            if (!gitHub){
                return 'You should write a gitHub user name';
            } else {
                return true;
            }
        }
    }
];

const intern = [
    {
        type: 'input',
        message: 'Intern\'s name: ',
        name: 'name',
        validate: name => {
            if (!name){
                return 'You should write a intern\'s name';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Employee ID: ',
        name: 'employeeId',
        validate: employeeId => {
            if (isNaN(employeeId)){
                return 'Please, enter a valid employee ID (numeric)';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Intern\'s email: ',
        name: 'email',
        validate: function(email){
            validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if (!validate) {
                return 'Please, enter a valid email';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Intern\'s school: ',
        name: 'school',
        validate: school => {
            if (!school){
                return 'You should write an school\'s name';
            } else {
                return true;
            }
        }
    }
];

// add an engineer
function addEngineer() {    
    inquirer.prompt(engineer)
    .then((data) => {
        const employee = new Engineer(data.name, data.employeeId, data.email, data.gitHub);
        team.push(employee);
        addMember();
    });

};

// add an intern
function addIntern() {
    inquirer.prompt(intern)
    .then((data) => {
        const employee = new Intern(data.name, data.employeeId, data. email, data.school);
        team.push(employee);
        addMember();
    });

};

// write/create the html file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName, data, (err) =>
    err? console.log(err) : console.log("Your team.html file was successfully created!"));
};

// generate the html
function createTeam() {
    let content = htmlGenerator(team);
    writeToFile('team.html', content);
};

// allows add an engineer, intern or finish the team
function addMember() {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to: ',        
        choices: ['add an Engineer', 'add an Intern', 'finish my team'],
        name: 'options',
    })
    .then((UserChoice) => {
        switch(UserChoice.options) {
            case 'add an Engineer':
                addEngineer();              
                break;
            case 'add an Intern':
                addIntern();
                break;
            case 'finish my team':
                createTeam();
                break;
            default:
                break;
          }
    });    

};

// initialize with manager info
function init() {
    inquirer.prompt(manager)
    .then((data) => {
        const employee = new Manager(data.name, data.employeeId, data.email, data.office);
        team.push(employee);
        addMember();
    });     
};

  
// function call to initialize app
init();