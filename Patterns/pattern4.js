/*

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5

*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number for Pattern ", (value) => {
  console.log(pattern(value));
  rl.close();
});

const pattern = (n) => {
  let string = "";
  for (row = 1; row <= n; row++) {
    for (col = 1; col <= row; col++) {
      string += col + " ";
    }
    string += "\n";
  }
  return string;
};
