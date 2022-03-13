/*
Create a program that reads two integers, a and b, from the user. Your program should
compute and display:
• The sum of a and b
• The difference when b is subtracted from a
• The product of a and b
• The quotient when a is divided by b
• The remainder when a is divided by b
• The result of log10 a
• The result of a^b
*/

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (a) => {
  rl.question("Enter another number: ", (b) => {
    console.log(`The sum of ${a} and ${b} is ${parseInt(a) + parseInt(b)}`);
    console.log(
      `The difference of ${a} and ${b} is ${parseInt(a) - parseInt(b)}`
    );
    console.log(`The product of ${a} and ${b} is ${parseInt(a) * parseInt(b)}`);
    console.log(
      `The quotient of ${a} and ${b} is ${parseInt(a) / parseInt(b).toFixed(2)}`
    );
    console.log(
      `The remainder of ${a} and ${b} is ${parseInt(a) % parseInt(b)}`
    );
    console.log(
      `The result of log10 of ${a} is ${Math.log10(parseInt(a)).toFixed(2)}`
    );
    console.log(
      `The result of ${a} to the power of ${b} is ${Math.pow(
        parseInt(a),
        parseInt(b)
      )}`
    );
    rl.close();
  });
});
