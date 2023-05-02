// named-exports.js
const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}

const LAZY_PI = 3.14;

module.exports = {
    add,
    subtract,
    LAZY_PI
};