const questions = [
    {
        name: "name",
        type: "input",
        message: "Enter employee's full name:",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return "Please enter employee name.";
            }
        }
    },
    {
        name: "id",
        type: "input",
        message: "Enter employee's ID:",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return "Please enter valid employee ID";
            }
        }
    },
    {
        name: "email",
        type: "input",
        message: "Enter employee's email:",
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return "Please enter valid employee email";
            }
        }
    },
    {
        name: "role",
        type: "list",
        message: "Enter employee's role:",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

module.exports = questions