/* 
In the United States, fuel efficiency for vehicles is normally expressed in miles-per-gallon (MPG). 
In Canada, fuel efficiency is normally expressed in liters-per-hundred kilometers (L/100 km). 
Use your research skills to determine how to convert from MPG to L/100 km. 
Then create a program that reads a value from the user in American
units and displays the equivalent fuel efficiency in Canadian units.
*/

// 1 mpg = 235.21 l/100km

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the fuel efficiency in miles per gallon: ", (value) => {
  console.log(`The fuel efficiency in liters per 100 km is ${235.21 * value}`);
  rl.close();
});
