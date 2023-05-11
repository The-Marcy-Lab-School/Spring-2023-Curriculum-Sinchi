//nested arrays
const coordinates = [
// Index positions

//   0    1
    [10, 20], // 0
    [30, 40], // 1
    [50, 60] // 2
];

const firstCoordinate = coordinates[0];
const firstX = coordinates[0][0];
const firstY = coordinates[0][1];

console.log(firstCoordinate); // [10, 20]
console.log(firstX); // 10
console.log(firstY); // 20

// iteration to print each value
// nested loop

for (let i = 0; i < coordinates.length; i++) {
    // console.log(coordinates[i])
    for (let j = 0; j < coordinates[i].length; j++) {
        console.log(coordinates[i][j])
    }
}

