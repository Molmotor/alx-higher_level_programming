#!/usr/bin/node
function conv (input) {
  const num = Number(input);

  if (!isNaN(num)) {
    console.log('My number: ', num);
  } else {
    console.log('Not a number');
  }
}
