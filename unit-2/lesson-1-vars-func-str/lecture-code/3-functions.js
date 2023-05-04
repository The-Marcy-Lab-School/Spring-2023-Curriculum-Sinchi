// Traditional function declaration
function add(x, y) { // x and y are parameters
    return x + y;
}

add(3, 4); // 3 and 4 are arguments

// Traditional Function expression
const add2 = function (x, y) {
    return x + y;
}

// Arrow function expression
const add3 = (x, y) => {
    return x + y;
}

// Arrow function expression with implicit return
const add4 = (x, y) => x + y;

  // For style and code reasons we will use the arrow function
  // Except for a few cases where we will use the traditional functions
  // (we will talk about in later modules)