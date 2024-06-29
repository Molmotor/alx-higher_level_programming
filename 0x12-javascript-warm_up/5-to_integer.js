#!/usr/bin/node

// Check if there is an argument provided
if (process.argv.length > 2) {
  // Get the first argument
  const arg = process.argv[2];

  // Check if the argument can be converted to an integer
  const num = parseInt(arg);

  // If the argument is a valid integer, print it
  if (!isNaN(num)) {
    console.log('My number: ' + num);
  } else {
    console.log('Not a number');
  }
} else {
  console.log('Not a number');
}
