/*
Pretend that you have just opened a new savings account that earns 4 percent interest per year. 
The interest that you earn is paid at the end of the year, and is added to the balance of the savings account. 
Write a program that begins by reading the amount of money deposited into the account from the user.
Then your program should compute and display the amount in the savings account after 1, 2, and 3 years.
Display each amount so that it is rounded to 2 decimal places.
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the amount of money you want to deposit: ", (amount) => {
  let Interest = 0.04;
  for (n = 1; n <= 3; n++) {
    console.log(
      `Amount after ${n} years: Rs. ${(amount * (1 + Interest) ** n).toFixed(2)}`
    );
  }
  rl.close();
});
