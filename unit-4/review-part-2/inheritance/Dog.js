const Animal = require('./Animal');

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.speed = 20;

    }

}

const reign = new Dog('Reign', 'Rot');

console.log(reign)