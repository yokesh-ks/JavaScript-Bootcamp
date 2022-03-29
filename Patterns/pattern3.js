/*

 * * * * *
 * * * *
 * * *
 * *
 *
 
 */

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the Number for Pattern : ", (value) => {
  console.log(pattern(value));
  rl.close();
});

const pattern = (n) => {
  let string = "";
  for (row = 1; row <= n; row++) {
    for (col = 1; col <= n - row + 1; col++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};
