/*
In many jurisdictions a small deposit is added to drink containers to encourage people
to recycle them. In one particular jurisdiction, drink containers holding one liter or
less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit.

Write a program that reads the number of containers of each size from the user.
Your program should continue by computing and displaying the refund that will be
received for returning those containers. Format the output so that it includes a dollar
sign and always displays exactly two decimal places.
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkDeposit = (drinkContainer) => {
  if (drinkContainer === "oneLiter") {
    return 0.1;
  }
  if (drinkContainer === "moreThanOneLiter") {
    return 0.1;
  }
  return 0;
};

rl.question(
  "Enter the Number of containers have 1 liter or less : ",
  (oneLiter) => {
    rl.question(
      "Enter the Number of containers have more than 1 liter : ",
      (moreThanOneLiter) => {
        var refund =
          oneLiter * checkDeposit("oneLiter") +
          moreThanOneLiter * checkDeposit("moreThanOneLiter");
        console.log(`The refund amount is $${refund.toFixed(2)}`);
        rl.close();
      }
    );
  }
);
