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

// shallow clone
const parentCloneShallow = { ...parent };
child.name = 'Maya';
console.log(parentCloneShallow.child.name); // Maya, not Ash anymore
console.log(child.name); // Maya

module.exports = {
    child,
    parent
}