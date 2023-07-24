console.log('\n getElementById-------');
const mainHeading = document.getElementById('main-heading');

console.log('Click to expand: ', mainHeading);
console.log('mainHeading id: ', mainHeading.id);
console.log('mainHeading innerText: ', mainHeading.innerText);

// mainHeading.innerText = "test text"

console.log('\n querySelector------');
const subHeading = document.querySelector('#sub-heading')

console.log(subHeading)

const list = document.querySelectorAll('li');

console.log('listItems', list);

// console.log(list.map((item) => item.innerText))

// convert to an array
const listItemsArrayOld = Array.from(list);
const listItemsArray = [...list]

console.log("Array.from ", listItemsArrayOld);
console.log("new form", listItemsArray);

// PATTERN:
// create new element
// modify it
// append to the DOM

const createNewH3 = (parentEl, text) => {
    const newH3 = document.createElement('h3');
    // console.log(newH3)
    newH3.textContent = text;
    // console.log(newH3);
    parentEl.appendChild(newH3)
};

createNewH3(document.body, 'Ashley created this')


// const newH1 = document.createElement('h1');
// const newH2 = document.createElement('h1');

// newH1.innerText = "hi";
// newH1.style.display = 'none';
// newH2.textContent = "Bye"

// console.log(newH1, newH2)

// append to the surprise div

const surpriseDiv = document.getElementById('surprise');
console.log('surprise Div', surpriseDiv);

createNewH3(surpriseDiv, 'Surprise!');


const alterText = (el, text) => {
    el.textContent = text;
}

alterText(mainHeading, "Hello, This is Sinchi first (potentially) DOM practice")

alterText(subHeading, "Shoutout everyone")

