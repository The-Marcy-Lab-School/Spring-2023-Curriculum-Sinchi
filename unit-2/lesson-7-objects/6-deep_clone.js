const { parent, child } = require('./5-shallow_clone');

child.name = 'Ash'; // reset
// this works if you know the exact properties to clone
const specificParentClone = { ...parent, child: { ...parent.child } };
child.name = 'Xio';
console.log(specificParentClone.child.name); // Ash
console.log(child.name); // Xio

// node 17+ adds a deep clone method
child.name = 'Ash'; // reset
const deepCloneNew = structuredClone(parent);
child.name = 'Ana';
console.log(deepCloneNew.child.name); // Ash
console.log(child.name); // Ana

// generic deep clone
child.name = 'Ash'; // reset
const deepCloneClassic = JSON.parse(JSON.stringify(parent));
child.name = 'Travis';
console.log(deepCloneClassic.child.name); // Ash
console.log(child.name); // Travis

// keys are quoted, all double quotes
// values are quoted if they are strings
// no trailing commas, comments, functions,
// any key pointing to undefined gets dropped
/*

{
    "name": "John",
        "age": 30,
            "likesTurtles": true
}

*/