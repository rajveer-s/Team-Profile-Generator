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