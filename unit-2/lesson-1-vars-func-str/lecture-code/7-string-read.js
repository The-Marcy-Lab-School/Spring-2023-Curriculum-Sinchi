const str = "Look, here I am!";

console.log(str.includes('I')); // true
console.log(str.includes('i')); // false
console.log(str.includes('here')); // true
console.log(str.includes('here i')); // false

console.log(str.startsWith('Look')); // true
console.log(str.startsWith('look')); // false
console.log(str.endsWith('am!')); // true
console.log(str.endsWith('am')); // false

console.log(str.indexOf('I')); // 11
console.log(str.indexOf('i')); // -1
console.log(str.indexOf('here')); // 6
console.log(str.indexOf('here i')); // -1

console.log(str.indexOf('e')); // 7
console.log(str.lastIndexOf('e')); // 9
