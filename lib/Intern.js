// Intern class:

// Class dependency. Intern class extends from Employee class:
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        // Test requirement 1: Set github account via contructor.
        this.school = school;
    }

    // Test requirement 2: getRole() should  return "Engineer".
    getRole() { return "Intern" }

    // Test requirement 3: get school name via getSchool().
    getSchool() { return this.school }
}

// We export the Intern class: 
module.exports = Intern;