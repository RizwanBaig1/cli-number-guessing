#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number*done
//User input for gussing number *done
//Compare user input with computer genrated number and show result *Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
console.log(answers);
if (answers.userguessedNumber === randomNumber) {
    console.log("Congtratulation! you guessed right number between 1-10.");
}
else {
    console.log("Soory you guessed wrong number");
}
