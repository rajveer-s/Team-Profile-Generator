const Employee = require('./Employee')

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  // get role function 
  getRole() {
    return 'Manager'
  }
  // get office number function 
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
