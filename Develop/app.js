const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



numberArray = []
teamArray = []
var id = 100

const setupQuestions = [
  {
      type: "input",
      name: "numberManager",
      message: "How many managers would you like to enter?",
  },
  {
      type: "input",
      name: "numberIntern",
      message: "How many interns would you like to enter?",
  },
  {
      type: "input",
      name: "numberEngineer",
      message: "How many engineers would you like to enter?"
  }
  
  ]

const managerQuestion = [
  {
      type: "input",
      name: "name",
      message: "Enter the manager's name:",
  },
  {
      type: "input",
      name: "email",
      message: "Enter the manager's email:",
  },
  {
      type: "input",
      name: "officeNumber",
      message: "What's manager's office number:"
  }
  
  ]

  const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
    },
    {
        type: "input",
        name: "school",
        message: "What school do you currently attend?"
    }
    

    ]
    const engineerQuestion = [
      {
          type: "input",
          name: "name",
          message: "Enter the engineer's name:",
      },
      {
          type: "input",
          name: "email",
          message: "Enter the engineer's email:",
      },
      {
          type: "input",
          name: "github",
          message: "What is your Gighub account name?"
      }
      
      ]


async function start(){
  console.log('\r\n')
  console.log("****************************************")
  console.log("*********Team Generator*****************")
  console.log("****************************************")
  const nathan = await inquirer.prompt(setupQuestions).then(response => {
  //let manager = new Manager(response.name,9674,response.email, response.officeNumber);
  //teamArray.push(manager);
  //console.log(response)
  numberArray = response
}

)}; 



async function getManager(){
 const nathan = await inquirer.prompt(managerQuestion).then(response => {
      let manager = new Manager(response.name,id++,response.email, response.school);
      teamArray.push(manager);
      
  }

  )}; 

async function getIntern(){
  const nathan = await inquirer.prompt(internQuestion).then(response => {
        let intern = new Intern(response.name,id++,response.email, response.officeNumber);
        teamArray.push(intern);
        
  }
  
)}; 
 
async function getEngineer(){
  const nathan = await inquirer.prompt(engineerQuestion).then(response => {
        let engineer = new Engineer(response.name,id++,response.email, response.github);
        teamArray.push(engineer);
      
  }
  
)}; 

  async function getEmployees() {
     await start()
     
    for (var i=0; i < numberArray.numberManager; i++) {
      console.log('\r\n')
      console.log("****************************************")
      console.log("***********Enter Manager****************")
      console.log("****************************************")
      await getManager();

    }

    for (var i=0; i < numberArray.numberIntern; i++) {
      console.log('\r\n')
      console.log("****************************************")
      console.log("************Enter Intern****************")
      console.log("****************************************")
      await getIntern();

    }

    for (var i=0; i < numberArray.numberEngineer; i++) {
      console.log('\r\n')
      console.log("****************************************")
      console.log("************Enter Engineer**************")
      console.log("****************************************")
      await getEngineer();

    }




    

  var renderedTeam =  render(teamArray)

  console.log(renderedTeam)

  fs.appendFile('myteam.html', renderedTeam, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

    console.log('Done!');
  }

  getEmployees()



  