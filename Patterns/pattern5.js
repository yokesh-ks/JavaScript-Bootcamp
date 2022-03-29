/*

 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 
    no of row = 11 -> 2n - 1
    no of col = 6  -> n

*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number for Pattern ", (value) => {
  console.log(pattern5(value));
  rl.close();
});

const pattern5 = (n) => {
  let string = "";
  for (row = 1; row <= 2 * n - 1; row++) {
    var totalColinRow = row <= n ? row : 2 * n - row;
    for (col = 1; col <= totalColinRow; col++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};

// n = 5, row = 8 ans = 2 2n -row
// n = 5, row = 9 ans = 1 2n -row -> last Element
