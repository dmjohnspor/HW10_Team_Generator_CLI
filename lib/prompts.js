const inquirer = require("inquirer");
const questions = require("./questions");

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const userQuestions = () => {
    inquirer.prompt(questions)
        .then(res => {
            if (res.role === "Manager") {
                inquirer.prompt([
                    {
                        name: "officeNumber",
                        type: "input",
                        message: "Enter manager's office number:"
                    }
                ]).then(managerRes => {
                    const newEmployee = new Manager(res.name, res.id, res.email, managerRes.officeNumber)
                    //console.log(newEmployee);
                })
            }
            else if (res.role === "Engineer") {
                inquirer.prompt([
                    {
                        name: "githubUser",
                        type: "input",
                        message: "Enter engineer's GitHub username:"
                    }
                ]).then(engineerRes => {
                    const newEmployee = new Engineer(res.name, res.id, res.email, engineerRes.githubUser);
                    //console.log(newEmployee);
                })
            }
            else if (res.role === "Intern") {
                inquirer.prompt([
                    {
                        name: "school",
                        type: "input",
                        message: "Enter intern's school:"
                    }
                ]).then(internRes => {
                    const newEmployee = new Intern(res.name, res.id, res.email, internRes.school);
                    //console.log(newEmployee);
                })
            }
        })
};

module.exports = userQuestions
