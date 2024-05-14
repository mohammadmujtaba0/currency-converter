#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.3,
    INR: 83.5,
    EUR: 0.92,
    SAR: 3.75,
    AED: 3.67,
    JPY: 156.47,
};
let firstQuestion = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: ["USD", "PKR", "INR", "EUR", "SAR", "AED", "JPY"],
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "PKR", "INR", "EUR", "SAR", "AED", "JPY"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter amount",
    },
]);
let fromAmount = currency[firstQuestion.from];
let toAmount = currency[firstQuestion.to];
let amount = firstQuestion.amount;
let baseAmount = amount / fromAmount;
let result = baseAmount * toAmount;
console.log(result);
