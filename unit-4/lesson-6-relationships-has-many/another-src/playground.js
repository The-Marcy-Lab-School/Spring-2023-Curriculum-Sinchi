const Cohort = require('./Cohort');
const Student = require('./Student');

const sinchi = new Cohort('Sinchi', 'S23', true, Student);
const akoma = new Cohort('Akoma', 'F22', true, Student);

const zo = new Student('Zo', 23, sinchi.id, Cohort);
zo.cohortId = akoma.id

console.log('cohort', akoma.getStudents());
