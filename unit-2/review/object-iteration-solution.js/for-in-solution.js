// Problem 1
const person = { name: 'John', age: 30, city: 'New York' };

for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`)
}

// Problem 2
const numbers = { a: 10, b: 20, c: 30 };
let sum = 0;

for (const prop in numbers) {
    sum += numbers[prop]
};

console.log(sum)

// Problem 3
const originalObj = { a: 1, b: 2, c: 3 };
const objo = {
    // a: 1 * 2 = 2,
    // b: 2 * 2 = 4,
    // c: 3 * 2 = 6,
};

for (const key in originalObj) {
    objo[key] = originalObj[key] * 2;
    console.log(objo)
}

console.log(objo)