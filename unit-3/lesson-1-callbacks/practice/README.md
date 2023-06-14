# Lab Review - Array.Sort()

With the given data, solve problems with the given information.




```js
const studentsGCA = [
  { name: 'Itzel', grade: 721 },
  { name: 'Carmen', grade: 675 },
  { name: 'Zo', grade: 800 },
  { name: 'Jowel', grade: 734 },
];
```

### Problem 1


Using the simple callback version of `sort()`. Sort the grade property from ascending order.

### Problem 2


Manually implementing `sort()` method. Sort the grade property to descending order.

### Problem 3


Create a simple calculator program that performs basic arithmetic operations (addition, subtraction, multiplication, division) using callback functions.

- Implement separate functions for each arithmetic operation: add, subtract, multiply, and divide.
- Each operation function should take two numbers and a callback function as parameters.
- The callback function should perform the actual arithmetic operation and return the result.
- Display the result of each operation using console.log().

```js
add(5, 3, (result) => {
  console.log('Addition:', result);
});
//Output: Addition: 8

subtract(10, 4, (result) => {
  console.log('Subtraction:', result);
});
//Output: Subtraction: 6

multiply(6, 2, (result) => {
  console.log('Multiplication:', result);
});
//Output: Multiplication: 12

divide(15, 3, (result) => {
  console.log('Division:', result);
});
//Output: Division: 5

```

*Note*: It's encourage to create additional test cases and explore different ways of implementing the callback functions to solidify understanding of how callbacks work in the context of a calculator program.

