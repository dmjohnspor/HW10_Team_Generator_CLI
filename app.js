const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Gathering information about each individual team member:
const employees = [];

const askMemberInfo = () => {
    inquirer.prompt(questions)
        .then(res => {
            if (res.role === "Manager") {
                inquirer.prompt([
                    {
                        name: "officeNumber",
                        type: "input",
                        message: "Enter manager's office number:"
                    }
                ]).then(manRes => {
                    const newEmployee = new Manager(res.name, res.id, res.email, manRes.officeNumber);
                    employees.push(newEmployee);
                    addMember();
                })
            }
            else if (res.role === "Engineer") {
                inquirer.prompt([
                    {
                        name: "githubUser",
                        type: "input",
                        message: "Enter engineer's GitHub username:"
                    }
                ]).then((engRes) => {
                    const newEmployee = new Engineer(res.name, res.id, res.email, engRes.githubUser);
                    employees.push(newEmployee);
                    addMember();
                })
            }
            else if (res.role === "Intern") {
                inquirer.prompt([
                    {
                        name: "school",
                        type: "input",
                        message: "Enter intern's school:"
                    }
                ]).then((intRes) => {
                    const newEmployee = new Intern(res.name, res.id, res.email, intRes.school);
                    employees.push(newEmployee);
                    addMember();
                })
            }
        })
}

// Adding additional team members:
const addMember = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Add another team member?',
            name: 'add'
        }
    ])
        .then((res) => {
            if (res.add === true) { askMemberInfo() }
            else { createHTML() }
        });
}

// Creating the html page:
const createHTML = () => {
    fs.writeFile(outputPath, render(employees), function (err) {
        if (err) {
            throw err;
        }
    });
}

askMemberInfo();