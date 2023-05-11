const arr = ['a', 'b', 'c'];
// add tail
arr.push('foo');
console.log('arr:', arr);
// a, b, c, foo

// remove and save value
const foo = arr.pop();
console.log('arr:', arr);
// a, b, c

console.log('foo:', foo); // foo


const arr2 = ['a', 'b', 'c'];

arr2.unshift('bar');
console.log('arr2:', arr2);
// bar, a, b, c

// remove and save value
const bar = arr2.shift();
console.log('arr2:', arr2);
// a, b, c

console.log('bar:', bar); // bar