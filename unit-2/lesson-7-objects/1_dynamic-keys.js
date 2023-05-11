const prompt = require('prompt-sync')({ sigint: true });

const dynamicKey = 'price';
const myDreamCar = {
  name: 'Tuscon',
  maker: 'Hyundai',
  // [dynamicKey]: 27000, // dynamic key in literal view (a bit rarer)
};
myDreamCar[dynamicKey] = 27000;

console.log(myDreamCar.price); // 27000

// example where dynamic keys are useful
const nameCarProperty = (car) => {
  const property = prompt("Name the property!");
  console.log(car[property]);
}

nameCarProperty(myDreamCar);