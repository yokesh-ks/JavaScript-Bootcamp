/*
An online retailer sells two products: widgets and gizmos. Each widget weighs 75
grams. Each gizmo weighs 112 grams. Write a program that reads the number of
widgets and the number of gizmos in an order from the user. Then your program
should compute and display the total weight of the order.
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkWieght = (product) => {
  if (product === "widgets") {
    return 0.075;
  }
  if (product === "gizmos") {
    return 0.112;
  }
  return 0;
};

rl.question("Enter the Number of widgets : ", (widgets) => {
  rl.question("Enter the Number of gizmos : ", (gizmos) => {
    var totalWeight =
      checkWieght("widgets") * widgets + checkWieght("gizmos") * gizmos;
    console.log(`The total weight of the order is ${totalWeight.toFixed(2)} Kg`);
    rl.close();
  });
});
