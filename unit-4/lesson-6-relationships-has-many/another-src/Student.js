const { getId } = require('./utils')

class Student {
  static #all = [];

  constructor(name, age, cohortId, cohortClass) {
    this.id = getId();
    this.name = name;
    this.age = age;
    this.cohortId = cohortId;
    this.cohortClass = cohortClass;

    Student.#all.push(this)
  }

  static getAll() {
    return [...Student.#all]
  }

  getCohort() {
    return this.cohortClass.search(this.cohortId)
  }
}

module.exports = Student;