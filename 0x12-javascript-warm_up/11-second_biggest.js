#!/usr/bin/node

// Get the command-line arguments (excluding the first two: node and script path)
const args = process.argv.slice(2);

// Check if there are less than 2 arguments
if (args.length <= 1) {
  console.log(0);
} else {
  // Convert all arguments to integers
  const nums = args.map(arg => parseInt(arg));

  // Find the largest number
  const max = Math.max(...nums);

  // Filter out the largest number and find the second largest
  const secondMax = Math.max(...nums.filter(num => num !== max));

  // Print the second largest number
  console.log(secondMax);
}
