/*
Write a program that reads a positive integer, n, from the user and then displays the
sum of all of the integers from 1 to n. The sum of the first n positive integers can be
computed using the formula:
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a positive integer: ", (answer) => {
  var sum = (answer * (answer + 1)) / 2;
  console.log(
    "The sum of the first " + answer + " positive integers is " + sum
  );
  rl.close();
});