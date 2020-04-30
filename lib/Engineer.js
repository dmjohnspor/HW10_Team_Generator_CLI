// Engineer class:

// Class dependency. Engineer class extends from Employee class:
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email);

        // Test requirement 1: Set github account via contructor.
        this.github = githubUser;
    }

    // Test requirement 2: getRole() should  return "Engineer".
    getRole() { return "Engineer" }

    // Test requirement 3: get github username via getGithub().
    getGithub() { return this.github }
}

// We export the Engineer class: 
module.exports = Engineer;