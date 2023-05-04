const str1 = "Example One";
console.log(str1.slice(0)) // Example one
console.log(str1.slice(0, 7)) // Example
console.log(str1.slice(8)) // One
console.log(str1.slice(-1)) // e
console.log(str1.slice(-3)) // One
console.log(str1.slice(-3, -1)) // On

const str2 = "eXaMpLe TwO";
console.log(str2.toLowerCase()) // example two
console.log(str2.toUpperCase()) // EXAMPLE TWO

const str3 = "example three";
console.log(str3.replace('three', '3')) // Example 3
console.log(str3.replace('e', 'E*')) // E*xample Three
console.log(str3.replaceAll('e', 'E*')) // E*xamplE* thrE*E*

// You can also use Regular Expressions to get all
console.log(str3.replace(/e/g, 'E*')) // E*xamplE* thrE*E*


// Know how I said always templates? I lied.
// Use concatenation when ONLY combining
// str1 + str2      WINNER
// `${str1}${str2}` LOSER
// `Hi ${str1} ${str2}.`           WINNER
// 'Hi ' + str1 + ' ' + str2 + '.' YIKES
const uppercase = str2[0].toUpperCase() + str2.slice(1).toLowerCase();
console.log(`"${uppercase}," is the proper case for "${str2}"`)