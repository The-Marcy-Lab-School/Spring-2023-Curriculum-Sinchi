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

//Constructor Function

function Person (name, age, ) {
    this.name = name;
    this.age = age;
    this.isCool = true
};







// Prototype
Person.prototype.greet = function (){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
}

const erica = new Person('erica', 21)
const joey = new Person('Joey', 20)

erica.greet()

console.log(erica.greet())
console.log(joey)
