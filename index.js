import chalk from "chalk";
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1:What is TypeScript primarily used for?",
        choices: ["A. Memory Management", "B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2:Which of the following is NOT a valid TypeScript data type?",
        choices: ["A. void", "B. any", "C. dynamic", "D. tuple"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:What is the primary purpose of TypeScript interfaces?",
        choices: ["A. To create new classes", "B. To describe the shape of an object", "C. To generate HTML templates", "D. To manage asynchronous code"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:What is a union type in TypeScript?",
        choices: ["A. A type that can be any value", "B. A type that can be one of several types", "C. A type that can be both a string and a number simultaneously", "D. A type that can be an object"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5: How can you allow an object to have any number of properties of a given type in TypeScript?",
        choices: ["A. { [key: any]: string; }", "B. { [key: string]: any; }", "C. { [property: string]: string; }", "D. { [value: string]: string; }"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "C. Static Typing":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log(chalk.red `1. Incorrect!`);
}
switch (quiz.question_2) {
    case "C. dynamic":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log(chalk.red `2. Incorrect!`);
}
switch (quiz.question_3) {
    case "B. To describe the shape of an object":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log(chalk.red `3. Incorrect!`);
}
switch (quiz.question_4) {
    case "B. A type that can be one of several types":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log(chalk.red `4. Incorrect!`);
}
switch (quiz.question_5) {
    case "B. { [key: string]: any; }":
        console.log(`5. Correct!`);
        ++score;
        break;
    default:
        console.log(chalk.red `5. Incorrect!`);
}
console.log(chalk.bgGreenBright `score:${score}`);
if (score == 5) {
    console.log(chalk.bold `Congratulation`);
}
