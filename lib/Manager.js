// Manager class:

// Class dependency. Manager class extends from Employee class:
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        // Test requirement 1: Set office number via contructor:
        this.officeNumber = officeNumber;
    }

    // Test requirement 2: getRole() should return "Manager":
    getRole() { return "Manager" }

    // Test requirement 3: get office number via getOfficeNumber():
    getOfficeNumber() { return this.officeNumber }
}

// We export the Manager class: 
module.exports = Manager;
