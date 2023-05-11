//for of iterations
const associateInstructors = ['itzel', 'carms', 'zo'];

for (let i = 0; i < associateInstructors.length; i++) {
    let ai = associateInstructors[i]
    console.log(ai)
}

// same readability, but less code
for (let ai of associateInstructors) {
    console.log(ai)
}
