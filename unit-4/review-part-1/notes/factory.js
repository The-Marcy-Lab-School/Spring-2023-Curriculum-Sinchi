const personFactory = (name, age) => {

    return {
        name,
        age,
        greet() {
            return `Hi, I'm ${name}! Nice to meet you!`
        }
    }

};

const jowel = personFactory('Jowel', 28);
const itzel = personFactory('Itzel', 35);

console.log(jowel)
console.log(jowel.greet())

console.log(itzel)
console.log(itzel.greet())


// implicit return

const laptopCreation = (make, model, storage, screenSize) => ({
    make,
    model,
    storage,
    screenSize,
    startup() {
        return `BEEP BEEP STARTING SOUNDS OF ${make}`
    }
});

const jowelLaptop = laptopCreation('Mac', 'Macbook Pro', '256GB', '13 in');
const reubenLaptop = laptopCreation('Mac', 'Macbook Pro', '516GB', '14 in');

console.log(jowelLaptop)
console.log(jowelLaptop.startup())

console.log(reubenLaptop)
console.log(reubenLaptop.startup())

reubenLaptop.make = 'Lenova';

console.log('change of make: ', reubenLaptop.make)
console.log('new start up sound: ', reubenLaptop.startup())

console.log('After changes', reubenLaptop)


