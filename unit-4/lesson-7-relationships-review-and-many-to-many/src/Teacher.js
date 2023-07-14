const { getId } = require('./utils');

class Teacher {
  static #all = [];

  constructor(name, TeacherStudentClass, StudentClass) {
    this.name = name;
    this.id = getId();
    this.TeacherStudentClass = TeacherStudentClass;
    this.StudentClass = StudentClass;

    Teacher.#all.push(this);
  }

  static list() {
    return [...Teacher.#all];
  }

  static findBy(teacherId) {
    return Teacher.#all.find((({ id }) => id === teacherId));
  }

  students() {
    return this.TeacherStudentClass.listByTeacher(this.id)
      .map((teacherStudent) => teacherStudent.student())
  }

  addStudent(studentId) {
    return new this.TeacherStudentClass(this.id, studentId, Teacher, this.StudentClass)
  }

  removeStudent(studentId) {
  }
}

module.exports = Teacher;