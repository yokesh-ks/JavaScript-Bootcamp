/* Create a program that reads the length and width of a farmer’s field from the user in
feet. Display the area of the field in acres.
*/

// Hint: There are 43,560 square feet in an acre.

var readline = require("readline");

const SquareFeetToAcres = 43560;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the length of your field in feet : ", (length) => {
  rl.question("Enter the width of your field in feet : ", (width) => {
    var area = length * width / SquareFeetToAcres;
    console.log(`The Area of your field is ${area.toFixed(2)} acres`);
    rl.close();
  });
});