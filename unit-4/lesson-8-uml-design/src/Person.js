const { getId } = require('./utils')

class Person {
    static #all = [];


    constructor(name) {
        this.id = getId();
        this.name = name;

        Person.#all.push(this)
    }

    // list all person within the class
    static list() {
        return [...Person.#all];
    }

    // create a method to create a new person
    static create(name) {
        return new Person(name)
    }

    // polymorphism

}

module.exports = Person