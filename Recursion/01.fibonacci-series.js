//fibonacci series

/*
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

F1 = 1
F2 = F1 + F0 = 0 + 1 = 1
F3 = F2 + F1 = 1 + 1 = 2
F4 = F3 + F2 = 2 + 1 = 3
F5 = F4 + F3 = 3 + 2 = 5
F6 = F5 + F4 = 5 + 3 = 8
.
.
Fn = F(n-1) + F(n-2)
*/

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number : ", (value) => {
  console.log(fibo(value));
  rl.close();
});

const fibo = (n) => {
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
};
