const objectFunctions = {
    //Lets create a greet 'Hello World' function
    //cannot use for `this` keyword

    greet1: () => { // arrow function
        console.log('Hello World!')
    },

    greet2: function () { // function expression
        console.log('Hello World!')
    },

    greet() { // method definition
        console.log('Hello World!')
    }

};

// objectFunctions.greet1()
// objectFunctions.greet2()
// objectFunctions.greet()


const personFactory = (name) => ({
    name,
    greet() {
        console.log(`Hi, I'm ${name}.`);
    },
});

const david = personFactory('David');
david.greet() // Hi, I'm David.
console.log(david.name);

david.name = 'Dave';
console.log(david.name);
david.greet() // Hi, I'm David.
david.name = 'Angie';
david.greet() // Hi, I'm David.

const thisPersonFactory = (name) => ({
    name,
    greet() {
        console.log(`Hi, I'm ${this.name}.`);
    },
});

const kayla = thisPersonFactory('Kayla');
console.log(kayla)
kayla.greet(); // Hi, I'm Kayla.

kayla.name = "Kay"
kayla.greet(); // Hi, I'm Kay.



const thisPersonFactory2 = (name, age) => ({
    name,
    age,
    isCool: true, // isCool just exists on the object
    greet() {
        console.log(`Hi, I'm ${this.name}.`);
    },
    sayCoolness() {
        this.isCool // but we can still reference it
            ? console.log("I'm one cool customer")
            : console.log("I'm a bit of a dweeb");
    },
    // Add an age property and a function 'Happy Birthday' that increments age and sends a message
    happyBirthday() {
        this.age++;
        console.log(`Happy Birthday, ${this.name}! You are ${this.age}`)
    }
});


const erica = thisPersonFactory2('Erica');
erica.sayCoolness()

erica.isCool = false;

erica.sayCoolness()


erica.age = 21;
console.log(erica)

const samuel = thisPersonFactory2('Sammy', 18);
console.log(samuel)

samuel.happyBirthday()
samuel.name = 'Sam'
samuel.happyBirthday()
console.log(samuel)

// samuel.greetPerson = () => {
//     console.log(`Hi! Person`)
// }
// console.log(samuel)


//build a car factory function, that takes a make, year, model, and needGas property.

const carFactory = (year, make, model,) => ({
    make,
    model,
    year,

    doesNeedGas: false,
    drive() {
        console.log(`Vroom vroom! I'm driving a ${this.year} ${this.make} ${this.model}`);
        this.doesNeedGas = true;
    },
    stopForGas() {
        if (!this.doesNeedGas) console.log("I don't need gas!");
        this.doesNeedGas = false;
        console.log('all filled up!');
    },


});

const jowelCar = carFactory(2020, 'Hyundai', 'Tucson');
console.log(jowelCar)
jowelCar.drive()
console.log(jowelCar)
jowelCar.doesNeedGas = false;

jowelCar.stopForGas()


