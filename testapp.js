teamArray = []

console.log(teamArray)

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

  const subMenu = () => {
    inquirer.prompt([
        {
          type: 'list',
            name: 'type',
            message: 'What type of employee is this person?',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
        {
          type: "input",
          message: "Please type the employees name?",
          name: "name"
        },
        {
          type: "input",
          message: "Enter Employee ID",
          name: "id"
        },
        {
            type: "input",
            message: "Enter employee email",
            name: "email"
          }
          
      ])
      .then(function(response) {

        console.log(response)

    
      
    
});
}


function renderManager(){
    inquirer.prompt(managerQuestion).then(response => {
        let manager = new Manager(response.name,9674,response.email, response.officeNumber);
        teamArray.push(manager);
        console.log(teamArray)
    }
    )}; 
    renderManager()
    console.log("after manager")
    