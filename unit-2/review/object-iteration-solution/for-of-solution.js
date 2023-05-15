// Modify this object to  create you
const awesomePerson = {
    name: 'Jowel',
    age: 28,
    hobbies: ['lacrosse', 'reading', 'cooking', 'sports'],
    isEngineer: true
};

awesomePerson.name = 'Erica';
awesomePerson.age = 20;
awesomePerson.hobbies = ['singing', 'walking', 'music'];

console.log(awesomePerson)

for (const val of Object.values(awesomePerson)) {
    console.log(val)
};

for (const trait of Object.keys(awesomePerson)) {
    console.log(`key: ${trait}`);
    console.log(`value: ${awesomePerson[trait]}`)
};

// Bonus 

for (const [key, value] of Object.entries(awesomePerson)) {
    if (key === 'hobbies') {
        console.log("hobbies:");
        for (const hobby of awesomePerson.hobbies) {
            console.log(hobby)
        }
    } else {
        console.log(`${key} = ${value}`)
    }
}


