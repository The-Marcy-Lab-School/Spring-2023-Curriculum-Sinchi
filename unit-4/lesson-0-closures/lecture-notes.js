let num = 0; // global variable that can be manipulated
const addOne = () => {
    num++;
    console.log('num:', num);
};

addOne();
addOne();

num = 19;
addOne();


const makeCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log('Current count:', count);
    };
};

const counter = makeCounter();
counter();
counter();
counter();
counter();

const newCounter = makeCounter();
newCounter()
newCounter()


/*
const getFunkyWord = (words, modulusVal = 2) => {
  return words.split('')
    .map((char, idx) => {
      return idx % modulusVal ? char.toLowerCase() : char.toUpperCase();
    })
    .join('');
};
*/

// currying

const mapCallback = (modulusVal) => (char, idx) => {
    return idx % modulusVal ? char.toLowerCase() : char.toUpperCase();
};


const getFunkyWord = (words, modulusVal = 2) => {
    return words.split('').map(mapCallback(modulusVal)).join('');
};


/*
console.log(getFunkyWord('hello world'));
console.log(getFunkyWord('hello world', 3));
console.log(getFunkyWord('hello world', 4));
*/


const carFactory = (make, model, owner) => {
  const owners = [owner];
  return {
    make,
    model,
    owners,
  };
};

const jowelCar = carFactory('Hyundai', "Tuscon", "Jowel");
console.log("good car: ", jowelCar);

jowelCar.make = 'Ford';
jowelCar.owners.pop();

console.log("bad car: ", jowelCar)

/*
{
    make:
    model:
    owners
}
*/

const privateCarFactory = (make, model, owner) => {
    const owners = [owner]; //private data 

    return {
        getMake: () => make, //now make is read only
        getModel: () => model,
        getOwners: () => [...owners],
        addOwner: (newOwner) => owners.push(newOwner),
        getProps: () => ({...{ make, model, owners }}), // allows us to view all properties of the object without modifying the original inputs
    };
};


const nathanCar = privateCarFactory('Lucid', 'Air', 'Nathan');
console.log("good car: ", nathanCar.getProps());

nathanCar.make = 'Tesla';
nathanCar.getOwners().pop();

console.log(nathanCar.getProps());

console.log(`bad ${nathanCar.make} vs real ${nathanCar.getMake()}`)
console.log(nathanCar) //make still exists. 
