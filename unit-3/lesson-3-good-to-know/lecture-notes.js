// init a var -> array
// iterate thru given arrs to look same items
//      if they share the same items 
//          put inside new array
//     return newArr

const whichAreInBothV1 = (arr1, arr2) => {
    // return arr1.filter(num => arr2.includes(num) )
    const results = [];
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) results.push(arr1[i]);
            count++
        }
    }
    console.log({ v: 1, count, results })
};

const whichAreInBothV2 = (arr1, arr2) => {

    const lookup = {};
    const results = [];
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        lookup[arr1[i]] = true;
        count++
        // console.log(lookup)
    }

    for (let i = 0; i < arr2.length; i++) {
        if (lookup[arr2[i]]) results.push(arr2[i])
        count++
        // console.log(results)
    }

    console.log({ v: 2, count, results })
};


const arr1 = new Array(10).fill(1).map((_, i) => i);
const arr2 = new Array(10).fill(1).map((_, i) => i * 5);

whichAreInBothV1(arr1, arr2);
whichAreInBothV2(arr1, arr2);

const fruit = ['apple', 'banana', 'orange', 'banana', 'kiwi', 'apple'];

const uniqueItemsV1 = (arr) => {
    let uniqueItem = arr.filter((fruit, index) => {
        return arr.indexOf(fruit) === index
    });
    return uniqueItem
}

const uniqueItemsV2 = (arr) => {
    // console.log(new Set(arr))
    return [... new Set(arr)]
}

console.log(uniqueItemsV1(fruit))
console.log(uniqueItemsV2(fruit))
