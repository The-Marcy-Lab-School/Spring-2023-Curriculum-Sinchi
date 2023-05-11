const arr = ['a', 'b', 'c', 'd', 'e'];
// at index 2, delete 1 item
arr.splice(2, 1);
console.log('arr:', arr);
// a, b, d, e

// at index 2, delete 0 items, and insert 'foo'
arr.splice(2, 0, 'foo');
console.log('arr:', arr);
// a, b, foo, d, e

// at index 2, delete 1 item, and insert 'bar'
arr.splice(2, 1, 'bar');
console.log('arr:', arr);
// a, b, bar, d, e