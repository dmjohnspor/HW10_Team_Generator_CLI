// Employee class:

class Employee {
    // Test requirement 1: Employee should be an object.
    constructor(name, id, email) {
        this.name = name; // Test requirement 2: Set name via costructor arguments.
        this.id = id; // Test requirement 3: Set id via constructor arguments.
        this.email = email; // Test requirement 4: Set email via constructor arguments.
    }

    // Test requirement 5: Get name via getName():
    getName() { return this.name }

    // Test requirement 6: Get id via getId():
    getId() { return this.id }

    // Test requirement 7: Get email via getEmail():
    getEmail() { return this.email }

    // Test requirement 5: getRole() returns employee:
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;