const string1 = "I'm using doubles to capture the 'single' quotes";
const string2 = 'I am doing the "opposite" here';
const string3 = `Backticks can catch " and ' easily`;

const escape = 'I\'m';

const myName = 'Sara';
const template = `I'm ${myName}`;

console.log(string1.length); // 48
console.log(string2.length); // 30
console.log(string3.length); // 34
console.log(escape.length); // 3, the \ doesn't count

console.log(template.length); // 8, the code doesn't count

console.log(string1[0]); // I
console.log(string1[string1.length - 1]); // s
console.log(string1[3]); // a space character

const preserveLines = `backticks
retain new line information
in context`;
console.log('preserveLines:', preserveLines);
const specialChars = "special characters \t\nmake spaces";
console.log('specialChars:', specialChars);