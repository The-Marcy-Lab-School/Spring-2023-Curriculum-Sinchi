const studentsGCA = [
    { name: 'Itzel', grade: 721 },
    { name: 'Carmen', grade: 675 },
    { name: 'Zo', grade: 800 },
    { name: 'Jowel', grade: 734 },
];

// Problem 1

// let grades = studentsGCA.map(item => item.grade);

// grades.sort()
// console.log(grades)

console.log(studentsGCA.sort((a, b) => a.grade - b.grade));


//problem 2

studentsGCA.sort((a, b) => {

    // We are comparing each value of grade 
    // using the positive 1 to place the item towards the end of the array
    if (a.grade > b.grade) {
        return -1
    } else if (a.grade < b.grade) {
        return 1
    } else {
        return 0
    }
})

console.log(studentsGCA)


// Problem 3

// Addition
const add = (num1, num2, callback) => {
    const results = num1 + num2;

    callback(results)
}

//using inline arrow function to call a function
add(5, 3, (result) => {
    console.log('Addition:', result);
});

// Subtract
const subtract = (num1, num2, callback) => {
    const results = num1 - num2;

    callback(results)
}

subtract(10, 4, (result) => {
    console.log('Subtraction:', result);
});

// Multiply

const multiply = (num1, num2, callback) => {
    const results = num1 * num2;

    callback(results)
}

multiply(6, 2, (result) => {
    console.log('Multiplication:', result);
});

// Divide

const divide = (num1, num2, callback) => {
    const results = num1 / num2;

    callback(results)
}

divide(15, 3, (result) => {
    console.log('Division:', result);
});