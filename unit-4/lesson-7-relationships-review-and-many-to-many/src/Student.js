const { getId } = require('./utils');

class Student {
  static #all = [];

  constructor(name, TeacherStudent, TeacherClass) {
    this.name = name;
    this.id = getId();
    this.TeacherStudent = TeacherStudent;
    this.TeacherClass = TeacherClass;

    Student.#all.push(this);
  }

  static list() {
    return [...Student.#all]
  }

  static findBy(studentId) {
    return Student.#all.find((({ id }) => id === studentId));
  }

  teachers() {
  }

  addTeacher() {
  }
}

module.exports = Student;
