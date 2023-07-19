const Animal = require('./Animal');

class Rabbit extends Animal {
    constructor(name, color, jumpHeight){
        super(name);
        this.speed = 15;
        this.color = color;
        this.jumpHeight = jumpHeight;
    }
}

const newRabbit = new Rabbit('Roger', 'Pink', '10 ft');

console.log(newRabbit)