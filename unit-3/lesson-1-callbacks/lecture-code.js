// Callback function as a regular function expression
function callbackFunction() {
    console.log("Callback executed!");
}

// Receiving function with a callback parameter
function performTask(callback) {
    console.log("Performing task...");
    // Perform some task or operation here

    // Invoke the callback function
    callback();
}

// Calling the receiving function and passing the callback function
performTask(callbackFunction);

//////////////////////////////
//First Class Function

const square = (num) => {
    return num * num;
}

const cube = (num) => {
    return num * num * num;
}

const firstClass = square(5)
//remove (5) from square and add into console.log(firstClass(5))

console.log(square);
console.log(firstClass)



const myMap = (func, list) => {
    const results = [];

    for (let i = 1; i <= list.length; i++) {
        results.push(func(i))
    }
    return results
}

let squares = myMap(square, [1, 2, 3, 4, 5])
let cubes = myMap(cube, [1, 2, 3, 4, 5])

console.log(squares)
console.log(cubes)


const logger = (msg) => {
    const logMessage = () => {
        console.log('Log: ' + msg)
    }
    return logMessage
    //why is returning a function useful?
}

let logHi = logger('Hi!');
logHi()
//this is called a closure


const htmlTag = (tag) => {
    const wrapText = (msg) => {
        console.log('<' + tag + '>' + msg + '</' + tag + '>')
    }
    return wrapText
}

const printH1 = htmlTag('h1');
printH1('Test Headline!');
printH1('Another Headline!');

const printP = htmlTag('p');
printP('Test Paragraph!')

const printH2 = htmlTag('h2')
const printH3 = htmlTag('h3')

printH2('smaller text')
printH3('even smaller text')


//Sorting 

const letters = ['king', 'crown', 'bond', 'Bazooka', 'Bond'];
const numbers = [5, 25, 23, 6, 2, 1, 10]

//sorting letters - default
letters.sort();
numbers.sort()
console.log(letters)
console.log(numbers)


//sorting Numbers - simple callback
numbers.sort((a, b) => a - b);

console.log(numbers)


//nested Numbers
const nestedNumbers = [[23], [18, 19], [10, 12], [28, 30]];

nestedNumbers.sort((a, b) => a[0] - b[0]);
console.log('a - b: ', nestedNumbers);

// descending order
nestedNumbers.sort((a, b) => b[0] - a[0]);
console.log('b - a: ', nestedNumbers);


// Nested Strings - Manually Implement Comparison
const nestedStrings = [['jowel'], ['angie'], ['erica', 'chu'], ['david']];
nestedStrings.sort((a, b) => {
    const nameA = a[0].toLowerCase();
    const nameB = b[0].toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(nestedStrings);

//reverse order - descending
nestedStrings.sort((a, b) => {
    const nameA = a[0].toLowerCase();
    const nameB = b[0].toLowerCase();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
});
console.log(nestedStrings);