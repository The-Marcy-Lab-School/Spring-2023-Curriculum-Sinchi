class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    greet() {
        return `Hi I'm ${this.name}`
    }

}

const hi = () => {
    console.log('hi')
}

hi()
const testAnimal = new Animal

console.log(testAnimal)

module.exports = Animal