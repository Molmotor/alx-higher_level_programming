#!/usr/bin/node

// Define the factorial function
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Get the first argument
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Compute the factorial and print the result
console.log(factorial(isNaN(num) ? 1 : num));
