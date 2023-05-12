
/////////////////////////////////////////////
// pure function
const add = (a, b) => {
    return a + b
};

// console.log(add(2, 2)) // 4


// pure function in an array
const sortedArray = (arr) => {
    return [...arr].sort((a, b) => a - b); // spread operator
    // return sortArr.sort((a, b) => a - b);
}
const originalArr = [3, 2, 1, 1, 5, 4, 6, 8, 10];
const sortedArr = sortedArray(originalArr);

// console.log(originalArr);
// console.log(sortedArr)

////////////////////////////////////////////
// Difference between objects and arrays - use cases.

// ["Erica", "Mayaluisa", "Jowel"] 
// arrays are best for when order matters

/*
{
    sinchi1: "Erica",
    sinchi2: "Mayaluisa",
    sinchi3: "Jowel"
}

// Objects are best for readability, when order does not matter
*/

////////////////////////////////////////////
// pass by reference array - obj

/*
const brands = ["fenti", "aveeno", "kiehl"];
const favoriteBrands = brands;
brands[2] = "skin-c";

console.log(brands);
console.log(favoriteBrands)
*/

const brands = {
    makeup: "fenti",
    lotion: "Aveeno",
    soap: "kiehls"
};
const favoriteBrands = brands

// console.log(brands);
// console.log(favoriteBrands)

brands.soap = "skin-c";

// console.log("pass by reference", brands);
// console.log("pass by reference", favoriteBrands);

////////////////////////////////////////////
// pass by value
let home = "jc, nj";
let childhoodHome = home; // "jc, nj"

console.log("before: ", home);
console.log("before: ", childhoodHome);

home = "bronx, ny";

console.log("after: ", home);
console.log("after: ", childhoodHome);



////////////////////////////////////////////
// shallow copy
const child = {
    name: 'Ash',
    age: 5,
};

const parent = {
    name: 'John',
    age: 30,
    bio: 'I like turtles',
    child, // shorthand nested object
};

// make copy of parent object
const copyOfParent = {...parent};

console.log("before mutation: ", copyOfParent);

//mutate child obj
child.name = "Mayaluisa";


// child is ref the original obj. 
console.log("after mutation: ", copyOfParent);

