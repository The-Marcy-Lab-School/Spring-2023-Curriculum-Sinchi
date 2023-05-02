// Notice, no relative path
const cowsay = require('cowsay');
const { v4 } = require('uuid');
// OUR files do need relative paths
const { add, subtract, LAZY_PI } = require('./named-exports');
const bigDeal = require('./default-export');

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(LAZY_PI);

console.log(bigDeal);

console.log(cowsay.say({ text: 'Hello World!' }));

const uuidV4 = v4;
console.log(uuidV4());