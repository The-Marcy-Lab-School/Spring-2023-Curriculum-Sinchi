const { getId } = require("./utils");

class Person {
    static #all = [];

    constructor(name) {
        this.id = getId()
        this.name = name;

        Person.#all.push(this);
    }

    static list() {
        return [...Person.#all]
    }

    static create(name) {
        return new Person(name)
    }


}

const newPerson = new Person('Jowel');
const adrain = Person.create('Adrian')

console.log(newPerson)
console.log(adrain)


module.exports = Person