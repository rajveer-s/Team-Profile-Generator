const Employee = require('./Employee')

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)

    this.school = school;
  }
  // get role function
  getRole() {
    return 'Intern'
  }
  // get school function 
  getSchool() {
    return this.school

  }
}

module.exports = Intern;
