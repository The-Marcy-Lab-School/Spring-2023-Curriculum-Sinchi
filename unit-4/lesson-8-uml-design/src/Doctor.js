const Person = require('./Person');

class Doctor extends Person {
    static #all = [];


    constructor(name, specialty) {
        super(name) //this.name = name -> person
        this.specialty = specialty

        Doctor.#all.push(this)
    }

    // list all person within the class
    static list() {
        return [...Doctor.#all];
    }

    // create a method to create a new person
    static create(name, specialty) {
        return new Doctor(name, specialty)
    }

    // polymorphism
}

module.exports = Doctor