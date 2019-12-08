const inquirer = require('inquirer');
const fs = require("fs");
const jest = require("jest");



let questions = [{

        type: "list",
        name: "jobTitle",
        message: "Please choose your job title:",
        choices: [`Engineer`, `manager`, `Intern`, ]

    },

    {
        message: "What's your email address",
        type: "Input",
        name: "Email address",

    },

    {
        message: "What's your github name",
        type: "input",
        name: "gitname",

    }

];

console.log(questions[1].name);

let me = questions[1].name



// let title = question[1].name

// inquirer.prompt([

//     {
//         message: "What's your github name",
//         type: "input",
//         name: "gitname",

//     }




// ]).then(a => {

//     fs.appendFile('team.html', "hello", fuction(err, date) {


//         return questions[1].message


//     }).catch

//     err("there is a problem")

// })



// function processAnswers(answers) {
//     console.log(answers);

// }
// //   inquirer.prompt(questions, processAnswers);

// processAnswers();

//   fs.appendFile('team.html', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });