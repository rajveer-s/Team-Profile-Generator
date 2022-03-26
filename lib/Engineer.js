const Employee = require('./Employee');


// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)

    this.github = github
  }
  getRole() {
    return 'Engineer'
  }
  getGithub() {
    return this.github
  }
}


// github--;GitHub username

// getGithub()

// getRole()-- return `'Engineer'`