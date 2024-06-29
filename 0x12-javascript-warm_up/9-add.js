#!/usr/bin/node

// Define the add function
const add = (a, b) => a + b;

// Get the first and second arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Check if both arguments can be converted to integers
if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  // Print the result of the addition
  console.log(add(num1, num2));
}
