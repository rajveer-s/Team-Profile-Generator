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
