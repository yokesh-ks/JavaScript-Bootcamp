/* Write a program that asks the user to enter the width and length of a room.
   Once the values have been read, your program should compute and display the area of the room.
   The length and the width will be entered as floating point numbers.
   Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the length of the room : ", (length) => {
  rl.question("Enter the width of the room : ", (width) => {
    var area = length * width;
    console.log(`The Area of the room is ${area}`);
    rl.close();
  });
});