//Just like strings!

//              [0]     [1]        [2]      [3] 
const arr = ['angie', 'emerolde', 'aj', 'renaldo'];

console.log(arr.length); // 4
console.log(arr[2]); // aj
console.log(arr[0].length) // "angie" -> 5
console.log(arr[arr.length - 1]) // renaldo


// logs each letter
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}