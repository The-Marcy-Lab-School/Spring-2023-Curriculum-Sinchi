const { getId } = require('./utils');

class Cohort {
  static #all = [];

  constructor(name, year, isPastHighSchool, studentClass) {
    this.id = getId();
    this.name = name;
    this.year = year;
    this.isPastHighSchool = isPastHighSchool;
    this.studentClass = studentClass;

    Cohort.#all.push(this)
  }

  static getAll() {
    return [...Cohort.#all]
  }

  static search(cohortId) {
    return [...Cohort.#all].find((cohort) => {
      return cohort.id === cohortId;
    })
  }

  getStudents() {
    return this.studentClass.getAll().filter((student) => {
      return student.cohortId === this.id
    })
  }
}

module.exports = Cohort;