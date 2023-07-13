const Teacher = require('./Teacher');
const TeacherStudent = require('./TeacherStudent');
const Student = require('./Student');

console.clear();

const jowel = new Teacher('Jowel Rosario', TeacherStudent, Student);
const itzel = new Teacher('Itzel Rendon', TeacherStudent, Student);
const ash = new Student('Ash', TeacherStudent, Teacher);
const sam = new Student('Sam', TeacherStudent, Teacher);

jowel.addStudent(sam.id);
jowel.createStudnet('tom', 12)

console.log(jowel.students());
