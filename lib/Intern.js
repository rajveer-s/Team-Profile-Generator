const Employee = require('./Employee')

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)

    this.school = school;
  }
  getRole() {
    return 'Intern'
  }
  getSchool() {
    return this.school

  }
}