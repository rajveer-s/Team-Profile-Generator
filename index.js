// Get all the required packages 

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// require the files 
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const {
  generateEngineerCard,
  generateManagerCard,
  generateInternCard,
  baseHtml
} = require("./src/htmlGen");
// an empty array to push all the answers to 
const teamMemberHtmlArr = [];


function init() {
  function managerCreate() {
    inquirer.prompt([{
      // confirms if its the manager or not 
      name: 'check',
      type: 'confirm',
      message: 'Are you the Manager ?',

    },
    {
      name: 'name',
      message: 'what is your Name ?',
      when: (answers) => {
        if (answers.check) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      name: 'email',
      when: (answers) => {
        if (answers.check) {
          return true;
        } else {
          return false;
        }
      },
      message: 'what is your email ?',
      validate: function (email) {  //validates that only email syntax is entered in

        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        if (valid) {
          return true;
        } else {

          return "Please enter a valid email";
        }
      }
    },
    {
      name: 'id',
      message: 'what is your id ?',
      when: (answers) => {
        if (answers.check) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      name: 'officeNumber',
      message: 'what is your Office Number ?',
      when: (answers) => {
        if (answers.check) {
          return true;
        } else {
          return false;
        }
      },
    },
    ])
      .then(({ name, id, email, officeNumber, check }) => {
        if (!check) {
          console.log("go get your manager")
          return setTimeout(() => {
            managerCreate()
          }, 1000);
        }
        const manager = new Manager(name, id, email, officeNumber)
        teamMemberHtmlArr.push(generateManagerCard(manager))
        mainMenu()
      })
  }
  //if there is no more employees create the html file if not run the engineer or intern function
  function mainMenu() {
    inquirer.prompt([{
      type: 'list',
      name: 'addedRole',
      message: 'who would you like to add next ?',
      choices: ['Engineer', 'Intern', "No, I'm done"]
    },
    ])
      .then(answers => {
        switch (answers.addedRole) {
          case "Engineer":
            return engineerCreate();
          case "Intern":
            return internCreate();
          default:
            return generateFile();
        }
      })
  }
  // engineer create function 
  function engineerCreate() {
    inquirer.prompt([{
      name: 'name',
      message: 'What is Enginners Name ?',
    },
    {
      name: 'email',
      message: 'What is your email ?',
      default: () => { },
      validate: function (email) {

        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

        if (valid) {
          return true;
        } else {
          console.log(".  Please enter a valid email")
          return false;
        }
      }
    },
    {
      name: 'id',
      message: 'What is your id ?',
    },
    {
      name: 'github',
      message: 'What is your github Username ?',
    },
    ])
      .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github)
        teamMemberHtmlArr.push(generateEngineerCard(engineer))
        mainMenu()
      })

  }
