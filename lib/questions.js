const questions = [
    {
        name: "name",
        type: "input",
        message: "Enter full name of employee:",
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
        message: "Enter employee ID:",
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
        message: "Enter employee email:",
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
        message: "Please chose role of employee:",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

module.exports = questions