/*
The program that you create for this exercise will begin by reading the cost of a meal ordered at a restaurant from the user.
Then your program will compute the tax and tip for the meal.
Use your local tax rate when computing the amount of tax owing.
Compute the tip as 18 percent of the meal amount (without the tax).
The output from your program should include the tax amount, the tip amount, and the grand total for
the meal including both the tax and the tip.
Format the output so that all of the values are displayed using two decimal places.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const taxRate = 0.08;
const tipRate = 0.18;

rl.question("Enter the cost of food : ", (cost) => {
    let tax = cost * taxRate;
    let tip = cost * tipRate;
    let total = parseInt(cost) + tax + tip;
    console.log(`Tax: ${tax.toFixed(2)}`);
    console.log(`Tip: ${tip.toFixed(2)}`);
    console.log(`Total: ${total.toFixed(2)}`);
    rl.close();
});