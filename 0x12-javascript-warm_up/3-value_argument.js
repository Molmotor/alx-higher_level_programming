#!/usr/bin/node
const args = process.argv.slice(2);
const firstArg = args[0] ? args[0] : 'No argument';
console.log(firstArg);
