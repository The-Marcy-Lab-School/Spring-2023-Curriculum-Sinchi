let name = 'Adrian'

const objectFunctions = {
    name: 'Jowel',

    greet1: () => { // arrow function
        console.log('Arrow function: ', `Hello ${this.name}!`)
    },

    greet2: function () { // function expression
        console.log('Function expression: ', `Hello ${this.name}!`)
    },

    greet() { // method definition
        console.log('Method definition: ',`Hello ${this.name}!`)
    }
};

objectFunctions.greet1();
objectFunctions.greet2();
objectFunctions.greet();

//expectations?


/*
Arrow functions
- Arrow functions do not have their own this value; instead, they inherit this from the surrounding context or lexical scope in which they are defined. `this` refers to the global scope so it will be undefined

function Expressions
- The value of this in a function expression is determined by how the function is called.

Method Expressions
- They have access to the object or class instance through the this keyword.
Method expressions can be used to define behavior specific to an object or class, and they can access other properties and methods of the object or class using this.

*/




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

const gonzalo = carFactory(2024, 'benz', 'S580');

console.log(gonzalo)

gonzalo.drive()
console.log(gonzalo)

gonzalo.stopForGas()
console.log(gonzalo)





