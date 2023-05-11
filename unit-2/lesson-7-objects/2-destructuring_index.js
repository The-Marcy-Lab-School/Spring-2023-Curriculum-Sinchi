// destructuring
const person = {
    name: "Erica",
    age: 20
}

const person2 = {
    name: "Jason",
    age: 21
}

const greetPerson = (person) => {
    const { name, age } = person;

    console.log(`Hello, ${name}! You are ${age} years old.`);
};

greetPerson(person)

// destructure arg directly
const greetPersonShort = ({ name, age }) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};

greetPersonShort(person2)