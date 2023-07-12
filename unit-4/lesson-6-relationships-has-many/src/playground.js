const Owner = require('./Owner');
const Cat = require('./Cat');

console.clear();
const bill = Owner.create("Bill", Cat);
const ted = Owner.create("Ted", Cat);
console.log('bill:', bill);
const garfield = Cat.create('Garfield', bill.id, Owner);
const felix = Cat.create('Felix', ted.id, Owner);
console.log('garfield:', garfield);

console.log('bill.cats():', bill.cats());
console.log('garfield owner:', garfield.owner());
