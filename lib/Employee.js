// TODO: Write code to define and export the Employee class.
// Test requirement 1: Employee needs to be an object.
// Test requirement 2: Set name via costructor arguments.
// Test requirement 3: Set id via constructor arguments.
// Test requirement 4: Set email via constructor arguments.
// Test requirement 5: Get name via getName().
// Test requirement 6: Get id via getId().
// Test requirement 7: Get email via getEmail().
// Test requirement 5: getRole() returns employee.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;