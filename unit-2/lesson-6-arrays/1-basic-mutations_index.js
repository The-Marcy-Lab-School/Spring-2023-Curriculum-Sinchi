//basic mutations
const changeIdx = ['1', '2', 'three', '4our', 5];

console.log(changeIdx) // ['1', '2', 'three', '4our', 5]

// Mutate items
changeIdx[2] = "3"; // ['1', '2', '3', '4our', 5]
changeIdx[3] = "4"; // ['1', '2', '3', '4', 5]
changeIdx[4] = 6 // ['1', '2', '3', '4', 6]
console.log(changeIdx)

console.log(changeIdx.length) // 5

changeIdx.length = 6
console.log(changeIdx) // [ '1', '2', '3', '4', 6, <1 empty item> ]

changeIdx.length = 0 
console.log(changeIdx) // []
