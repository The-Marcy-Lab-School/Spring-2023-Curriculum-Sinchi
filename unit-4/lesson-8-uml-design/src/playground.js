const Person = require('./Person');
const Doctor = require('./Doctor')

const testPerson = Person.create('Joseph');

const domo = Doctor.create('Domo', 'Peds');
const aj = Doctor.create('Ajene', 'Surgeon');


console.log(testPerson)
console.log(domo)
console.log(aj)
