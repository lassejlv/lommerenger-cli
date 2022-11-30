import inquirer from "inquirer"

const questions = [
  {
    type: "input",
    name: "firstNumber",
    message: "Første tal: ",
  },

  {
    type: "input",
    name: "secondNumber",
    message: "Andet tal: ",
  },

  {
    type: "list",
    name: "type",
    message: "Regneform: ",
    choices: ["+", "-", "/", "*"]
  }
];

inquirer.prompt(questions)
  .then((answers) => {

    let res
    
    function message(result) {
        console.log(`Resultatet er: ${result}`)
    }

    switch (answers.type) {
        case "+":
            res = parseInt(answers.firstNumber) + parseInt(answers.secondNumber);
            message(res);
            break;
        case "-":
            res = parseInt(answers.firstNumber) - parseInt(answers.secondNumber);
            message(res);
            break;
        case "*":
            res = parseInt(answers.firstNumber) * parseInt(answers.secondNumber);
            message(res)
            break;
        case "/":
            res = parseInt(answers.firstNumber) / parseInt(answers.secondNumber);
            message(res)
            break;
    }



  })
  .catch((error) => {
    console.log(error.message);
  });