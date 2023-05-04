// console.log(noHoist) // ERROR
const noHoist = "Remember, const/let don't hoist"

// sayHi() // ERROR
const sayHi = () => {
    console.log('hi');
}

// sayHi2() // ERROR
const sayHi2 = function () {
    console.log('hi');
}

sayHi3(); // This is ...totally fine?
function sayHi3() {
    console.log('hi');
}

// Scoping only makes more complications
const totallyFine = 'Scope is cool!';

// hoisting + scope suddenly creates errors
realIssue(); // called here is an error now

function realIssue() {
    console.log(totallyFine);
    console.log(problem);
}

const problem = 'This breaks though';
realIssue(); // called here, it's fine