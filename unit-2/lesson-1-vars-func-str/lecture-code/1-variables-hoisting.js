console.log(`Hi ${name}!`); // ERROR
const name = 'Jane';

console.log(`I'm ${age}.`); // ERROR
let age = 101;

// This doesn't error OR say their name
console.log(`Hi, ${weird}?`); // Hi, undefined?
var weird = 'Tom';

// This DOES throw an error despite hoisting
console.log(str.toUpperCase()); // ERROR
var str = 'Some string';