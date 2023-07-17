const { getId } = require('./utils');

class TeacherStudent {
  static #all = [];

  constructor(teacherId, studentId, TeacherClass, StudentClass) {
    if (TeacherStudent.findBy(teacherId, studentId)) {
      throw new Error("TeacherStudent already exists!");
    }

    this.id = getId();
    this.teacherId = teacherId;
    this.studentId = studentId;
    this.TeacherClass = TeacherClass;
    this.StudentClass = StudentClass;

    TeacherStudent.#all.push(this);
  }

  static findBy(teacherId, studentId) {
    return TeacherStudent.#all.find(teacherStudent => (
      teacherStudent.teacherId === teacherId
        && teacherStudent.studentId === studentId
    ));
  }

  static listByTeacher(teacherId) {
    return TeacherStudent.#all.filter((teacherStudentInstance) => {
      return teacherStudentInstance.teacherId === teacherId
    })
  }

  static listByStudent(studentId) {
  }

  teacher() {
  }

  student() {
    return this.StudentClass.findBy(this.studentId)
  }

  delete() {
  }
}

module.exports = TeacherStudent;
