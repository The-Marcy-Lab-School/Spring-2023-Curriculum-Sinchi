const person = {
    name: 'John',
    age: 30,
    bio: 'I like turtles',
    isCool: true,
};

// Object.keys
for (const key of Object.keys(person)) {
    console.log('key:', key);
    console.log('value:', person[key]); // this lets us see the key and value
}
console.log('-------------------');
for (let i = 0; i < Object.keys(person).length; i++) {
    console.log('key:', Object.keys(person)[i]);
    console.log('value:', person[Object.keys(person)[i]]);
}
console.log('-------------------');

// Object.values
for (const value of Object.values(person)) {
    console.log('value:', value);
}
console.log('-------------------');

for (let i = 0; i < Object.values(person).length; i++) {
    console.log('value:', Object.values(person)[i]);
}
console.log('-------------------');

// Object.entries
for (const [key, value] of Object.entries(person)) {
    console.log(`${key}=${value}`);
}