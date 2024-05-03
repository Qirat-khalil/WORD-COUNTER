#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bold.red("\n>>>>>> Welcome To Word Counter Application >>>>>>\n"))

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
])

let word = answer.sentence.trim().split(" ")

console.log(word)

console.log(`your sentence count is ${chalk.yellow(word.length)}`)