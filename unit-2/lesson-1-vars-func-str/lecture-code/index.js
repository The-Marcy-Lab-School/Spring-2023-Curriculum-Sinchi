const happyBirthday = (age) => {
  if (age === 25) {
    console.log('Happy birthday, you can rent a car!');
  } else if (age < 25) {
    console.log('No rental cars on your b-day yet.');
  } else if (age < 90) {
    console.log('Enjoy car rentals on your b-day!');
  } else {
    console.log('You should probably not be driving.');
  }
};

happyBirthday(25);
happyBirthday(20);
happyBirthday(30);
happyBirthday(90);

const checkTruthy = (val) => {
  if (val) {
    console.log('Truthy!', val);
  } else {
    console.log('Falsy!', val);
  }
};

checkTruthy(0);
checkTruthy(1);
checkTruthy(-1);
checkTruthy(NaN);
checkTruthy('');
checkTruthy('hi');
checkTruthy(null);
checkTruthy(undefined);
checkTruthy([]);
checkTruthy({});

// can also use !! to check truthiness
console.log(!!0); // false;
console.log(!!1); // true;

// Fill in the logical operators
const election = (age, isElectionDay, isUndecided) => {
  if (age < 21 || !isElectionDay) {
    console.log("Can't vote today!");
  } else if (age >= 21 && isUndecided) {
    console.log("Here's some voter info young one");
  } else if (age >= 50 && !isUndecided) {
    console.log('Ok Boomer, you seem sure, but please think of future generations');
  } else {
    console.log('Thank you for your vote.');
  }
};

// refactor with guard clause
const doAdminThingsBetter = (role) => {
  if (role !== 'admin') return console.log('Nothing to do');
  console.log('You can do admin things');
  console.log('You can do more admin things');
  console.log('You can do even more admin things');
};

// If time, do advanced refactor with guard clause
const getMedicalCostBetter = (hasInsurance, surgeryLevel) => {
  if (!hasInsurance) return 100000;
  if (surgeryLevel === 'major') return 500;
  if (surgeryLevel === 'minor') return 300;
  return 100;
};

// Refactor with ternary
const getCoolness = (likesPets) => {
  return likesPets ? 'cool' : 'not cool';
};

// fix with scope
const getBioBest = (age, first, last) => {
  let dynamicBio = `Wow, ${first} ${last} is already ${age} years old. Getting up there!`;
  if (age < 18) {
    dynamicBio = `${first} ${last} is only ${age} years old. Still a child!`;
  } else if (age < 50) {
    dynamicBio = `${first} ${last} is ${age} years old. Still young at heart!`;
  }
  console.log(dynamicBio);
  const finalBio = `Here's their bio: ${dynamicBio}. Click the profile for more info.`;
  console.log(finalBio);
};

// // Use typeof to tell what type a variable is
console.log(typeof 'hi'); // string
console.log(typeof 4); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof { ok: true }); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof NaN); // number
console.log(typeof (() => {})); // function

// check NaN with isNaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN('1')); // false

const nullVariable = null;
// check null with ===
console.log(nullVariable === null); // true
console.log(nullVariable === undefined); // false

// check arrays with Array.isArray
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ ok: true })); // false

console.log(Math.round(2.5)); // 3
console.log(Math.floor(2.99)); // 2
console.log(Math.ceil(2.01)); // 3

console.log(2 ** 3); // 8

const getRandomInt = (max) => Math.floor(Math.random() * max);

console.log(getRandomInt(3)); // 0, 1 or 2

console.log(getRandomInt(1)); // always 0

console.log(Math.random()); // float 0 to <1
