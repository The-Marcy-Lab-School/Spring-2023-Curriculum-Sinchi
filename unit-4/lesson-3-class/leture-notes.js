// constructor function
function OldPerson(name, age) {
    this.name = name;
    this.age = age;
    this.isCool = true;
}

OldPerson.prototype.greet = function () {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age}`)
}

OldPerson.prototype.sayCoolness = function () {
    this.isCool
        ? console.log(`I'm a cool person`)
        : console.log(`I'm of a dweeb`)
}
const jowel = new OldPerson('Jowel', 28)

// Class creation
class Person {
    // constructor inside
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.isCool = true;
    }

    // methods are defined inside the body
    greet() {
        console.log(`Hi! I'm ${this.name} and I'm ${this.age}`)
    }

    sayCoolness() {
        this.isCool
            ? console.log(`I'm a cool person`)
            : console.log(`I'm of a dweeb`)
    }
}

const chu = new Person('Chu', 20)

console.log(jowel)
console.log(chu)

// Classes are just "Syntactic Sugar" for the prototype pattern

const steve = new Person('Steve', 43);
// const steve = new OldPerson('Steve', 43);
console.log('steve:', steve);
steve.greet();
steve.sayCoolness();
steve.isCool = false;
steve.sayCoolness();

/** You can have all three and swap from Person to OldPerson to show the instance shifts */
console.log(steve instanceof Person);
console.log(steve instanceof PersonOld);
console.log(steve instanceof Object);


class PrivatePerson {
    #darkSecret;

    constructor(name, age, darkSecret) {
        this.name = name;
        this.age = age;
        this.#darkSecret = darkSecret;
        this.isCool = true;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
    }

    sayCoolness() {
        this.isCool
            ? console.log("I'm one cool customer")
            : console.log("I'm a bit of a dweeb");
    }

    getSecret() {
        console.log(this.#darkSecret); 
        this.#secretMethod();
    }

    #secretMethod() {
        console.log(`My name is ${this.name}, and that was my secret.`);
    }
}

const rose = new PrivatePerson('Rose', 95, '...there was room for Jack');
console.log('rose:', rose); /** Notice no private property visible */
// console.log('rose.#darkSecret:', rose.#darkSecret); // ERROR
// console.log('rose.#secretMethod:', rose.#secretMethod); // ERROR
rose.getSecret();