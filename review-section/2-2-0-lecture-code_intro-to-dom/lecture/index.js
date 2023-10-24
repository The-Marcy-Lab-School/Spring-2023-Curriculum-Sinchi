
console.log([{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}]);
// This shows that in the chrome console you can interact with things!

const mainHeading = document.querySelector('#main-heading');
const mainHeadingText = mainHeading.textContent;
console.log('mainHeading:', mainHeading.textContent);

const liElements = document.querySelectorAll('ul li')
console.log('liElements:', liElements);

const liArr = [...liElements] // Array.from(liElements)

console.log(liArr)


const h2El = document.createElement('h2')

h2El.textContent = 'New section!'
h2El.id = 'second-heading'

document.body.append(h2El);

const myName = 'Steve'
const div = document.querySelector('#test');
div.innerHTML = `
<h2>Hello! I'm cool!</h2>
<p>hi ${myName}!</p>
`
// <img src="" onerror="alert(document.cookie)">

const olEl = document.querySelector('ol');
olEl.classList.add('test-1')
olEl.classList.add('test-2')
olEl.classList.remove('test-1')
olEl.classList.toggle('test-2')

// DELETE
const finalLi = document.querySelector('ol .special-item')
console.log('finalLi:', finalLi);
finalLi.remove();

olEl.innerHTML = ''

// READ one
// const mainHeading = document.getElementById('main-heading')
// console.log('Click to expand!', mainHeading);
// console.log('mainHeading id:', mainHeading.id);
// console.log('mainHeading text:', mainHeading.textContent);

// const subHeading = document.querySelector('#sub-heading')
// console.log('subHeading.textContent:', subHeading.textContent);

// // READ many
// const listItems = document.querySelectorAll('li');
// console.log('listItems:', listItems);

// // Node Lists are not arrays, just array *like*
// // console.log(listItems.map((item) => item.textContent)); no!!
// // convert to an array (or use for loop with indexes)
// const listItemsArrayOld = Array.from(listItems);
// const listItemsArrayNew = [...listItems];

// // CREATE
// // pattern:
// //   create new element
// //   modify it
// //   append it to the DOM
// const createNewH3 = (parentEl, text) => {
//   const newH3 = document.createElement('h3');
//   newH3.textContent = text;
//   parentEl.append(newH3);
// }

// // append to the end
// createNewH3(document.body, 'Hello from JS!');

// // append to the surprise div
// const surpriseDiv = document.querySelector('#surprise');
// console.log('surpriseDiv:', surpriseDiv); // always check to see if you grab what you think you did
// createNewH3(surpriseDiv, 'Surprise!');

// // UPDATE
// const alterText = (el, text) => {
//   el.textContent = text;
// }

// alterText(mainHeading, 'Hello from JS!');

// // DELETE
// const deleteEl = (el) => {
//   el.remove();
// }

// // DELETE all children nodes
// const deleteChildren = (el) => {
//   el.innerHTML = '';
// }