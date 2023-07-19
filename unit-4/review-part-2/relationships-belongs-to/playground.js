const Person = require('./Person');
const Doctor = require('./Doctor');
const License = require('./License');

// Create Doctors
const maya = Doctor.create('Mayaluisa', 'Cardiologist', License);
const ashley = Doctor.create('Ashley', 'Neuro', License);

// Create their license
const ashNeuro = License.create('Neuro', '123323ewsds', ashley.id, Doctor);
const mayaCard = License.create('Cardiology', 'q3231edfds2', maya.id, Doctor);

// console.log(ashNeuro)
// console.log(mayaCard)

// console.log(maya)
// console.log(ashley)

// Check their license(s)
console.log("Mayaluisa credentials", maya.listLicenses());

// Use method to add new License
ashley.addLicense('Surgeon', 'IdidIt');

console.log(ashley.listLicenses())
