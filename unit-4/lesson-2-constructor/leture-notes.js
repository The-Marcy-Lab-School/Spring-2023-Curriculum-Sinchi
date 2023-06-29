
const personFactory = (name, age) => {
    return {
        name,
        age,
        isCool: true,
        greet() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
        },
        sayCoolness() {
            this.isCool
                ? console.log("I'm one cool customer")
                : console.log("I'm a bit of a dweeb");
        },
    };
};

// const zoFactory = personFactory('zo', 32);
// const saraFactory = personFactory('sara', 32);
// console.log('zo factory:', zoFactory);
// console.log('sara factory:', saraFactory);

// console.log('zo.greet === sara.greet:', zoFactory.greet === saraFactory.greet);


/*
function Person(name, age) { //Constructor should always be capitalized!
    this.name = name;
    this.age = age;
    this.isCool = true;

    this.greet = function () {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age}`)
    };

    this.sayCoolness = function () {
        this.isCool
            ? console.log("I'm one cool customer")
            : console.log("I'm a bit of a dweeb");
    };
}

// const zo = new Person('zo', 32);
// const sara = new Person('sara', 32);
// console.log('zo.greet === sara.greet:', zo.greet === sara.greet);


*/

function Fellow(name, age, cohort) {
    this.name = name;
    this.age = age;
    this.cohort = cohort;
    this.isWinner = this.cohort === 'sinchi' ? true : false
}



const marvin = new Fellow('Marvin', 23, 'sinchi');
const jowel = new Fellow('Jowel', 28, 'sankofa');


console.log(marvin)
console.log(jowel)


Fellow.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`)
}

Fellow.prototype.sayCohort = function () {
    this.cohort
        ? console.log(`We are better than the rest - we are ${this.cohort}`)
        : console.log(`We are sore losers - we are ${this.cohort}`)
}


// constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.isCool = true;
}

// all methods defined outside the body of the constructor
Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
};

Person.prototype.sayCoolness = function () {
    this.isCool
        ? console.log("I'm one cool customer")
        : console.log("I'm a bit of a dweeb");
};

const zo = new Person('zo', 32);
const sara = new Person('sara', 32);
// console.log('zo', zo);
// console.log('sara', sara);
// console.log('zo.greet === sara.greet:', zo.greet === sara.greet);

// console.log('zo prototype:', Object.getPrototypeOf(zo));
// console.log('sara prototype:', Object.getPrototypeOf(sara));
// console.log('same prototype :', Object.getPrototypeOf(zo) === Object.getPrototypeOf(sara));


console.log("\nWhy we don't use for..in -----------------");

// for..in is bad because it iterates over the prototype chain
// and can cause unexpected behavior
const badZoKeys = [];
for (const key in zo) {
    badZoKeys.push(key);
}
console.log('badZoKeys:', badZoKeys);


const clunkyZoKeys = [];
for (const key in zo) {
    if (zo.hasOwnProperty(key)) {
        clunkyZoKeys.push(key);
    }
}
console.log('clunkyZoKeys:', clunkyZoKeys);


const bestZoKeys = Object.keys(zo);
console.log('bestZoKeys:', bestZoKeys);


console.log('\nEverything is not an object: primitive wrappers ---------------');
// look up "autoboxing" for more info
console.log('Are strings instances of String:', 'I' instanceof String ? 'yes' : 'no');

const test1 = 'Then How does this work?';
const firstChar = test1.charAt(0);
console.log('First char:', firstChar);

// under the hood, here's essentially what happens
// create a string literal
const test2 = 'Oh, I see now.';
// JS then wraps it in a primitive wrapper object
let temp = new String(test2); // eslint-disable-line
// this primitive wrapper object is what has the method, and you save the result
const firstChar2 = temp.charAt(0);
// the primitive wrapper is then destroyed to not waste Memory
temp = null;
// you log your result!
console.log('First char:', firstChar2);
// This is why all string methods create copies, and not alter the original, they can't!
