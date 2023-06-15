//////
// Create your own forEach method
const numbers = [1, 2, 3, 4, 5];

const forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

forEach(numbers, (element, index, array) => {
    console.log(`Element at index ${index}: ${element}`);
    console.log('Full array:', array);
})

forEach(numbers, (element, index, array) => {
    const squared = element ** 2;
    console.log('Squared: ', squared)
})


/////////
// Higher Order Methods

// const numbers = [1, 2, 3, 4, 5]; //Defined all the way up top

//forEach
numbers.forEach(number => {
    console.log(number * 2)
});
// Output: 2
// 4
// 6
// 8
// 10

//map
const squaredNums = numbers.map(number => number * number);
// Output: [ 1, 4, 9, 16, 25 ]

console.log(squaredNums)


//filter
const evenNums = numbers.filter(even => even % 2 === 0);
// Output: [2, 4]

console.log(evenNums)

const sinchi = [
    { name: 'Marvin', age: 20 },
    { name: 'Samuel', age: 18 },
    { name: 'Jowel', age: 28 },
    { name: 'Adrian', age: 25 },
    { name: 'David', age: 21 }
]

const legalAge = (obj) => {
    return obj.filter(person => person.age > 20)
}

console.log(legalAge(sinchi))
/*
Output: [
  { name: 'Jowel', age: 28 },
  { name: 'Adrian', age: 25 },
  { name: 'David', age: 21 }
]
*/

const nestedArray = [
    [5, 21, 36, 40],
    [18, 5, 25, 50],
    [10, 6, 90, 44]
];

const filteredArray = nestedArray.filter(innerArr => {
    return innerArr.includes(5)
});
// Output: [ [ 5, 21, 36, 40 ], [ 18, 5, 25, 50 ] ]

console.log(filteredArray)

//reduce
const sum = numbers.reduce((accumulator, currentVal) => accumulator + currentVal);
// Output: 15
console.log(sum)

// create an object

const makeOfPerson = [
    { key: 'name', value: 'Jowel' },
    { key: 'age', value: 28 },
    { key: 'hometown', value: 'Inwood' },
    { key: 'vibeCheck', value: true }
];

const newObj = makeOfPerson.reduce((accum, item) => {
    accum[item.key] = item.value;
    console.log(accum)
    return accum
});

console.log(newObj);

// find
const foundNumber = numbers.find(number => number > 3);
console.log(foundNumber) // Output: 4

// some
const hasEvenNumbers = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumbers) // Output: true

// every
const allEvenNumbers = numbers.every(number => number % 2 === 0);
console.log(allEvenNumbers) // Output: false


// findIndex
const awesomePeople = ['Itzel', 'Emmanuel', 'All of Sinchi', 'Marcy people'];

const indexOfPeople = awesomePeople.findIndex(people => people === "All of Sinchi");
console.log(indexOfPeople) // Output: 2

///////////////////////////////////
// Chaining

const number = [10, 20, 31, 44, 55];
const addAllEvenNumbers = number
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num);

console.log(addAllEvenNumbers)

const vehicles = [
    { make: 'Hyundai', model: 'Tucson', year: 2021, color: 'black' },
    { make: 'Tesla', model: 'Model X', year: 2022, color: 'red' },
    { make: 'Jeep', model: 'Wrangler', year: 2018, color: 'black' },
    { make: 'Nissan', model: 'Pathfinder', year: 2021, color: 'gray' },
];

const allBlackVehicles = vehicles
    .filter(car => car.color === 'black')
    .map(car => console.log(car))

