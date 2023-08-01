//Code your solution here

//creation of elements
const headerDiv = document.createElement("div");
const h1 = document.createElement("h1");
const h4 = document.createElement("h4");



//append
document.body.append(headerDiv)
headerDiv.append(h1, h4)

// set attriubutes
headerDiv.setAttribute("class", "headerDiv")
h1.textContent = "My Favorite Sports";
h4.textContent = "Learn about how I spend my free time below!";


// styling
headerDiv.style.cssText = `
text-align: center;
  background-color: #00BDFF;
  color: white;
  padding: 5px 0px 20px 0px;
  border-radius: 5px;
`;

//Creation of Orange Section
const orangeBox = document.createElement('div')


orangeBox.style.cssText = `
    color: white;
    background-color: coral;
    margin: 20px 0px 15px 2px;
    padding: 5px 17px 5px 17px;
    border-radius: 5px;
`;

const orangeBoxHeader = document.createElement('h1')
orangeBoxHeader.textContent = "SPORTS"

// made a Ul list
const orangeBoxList = document.createElement('ul')

// made an array with content. then I iterated over it to append a new list item to the list 
const orangeBoxContent = ['Soccer', 'Football', 'Camping', 'Hiking'];
for (let i = 0; i < orangeBoxContent.length; i++) {
    const newContent = document.createElement('li')
    newContent.textContent = orangeBoxContent[i]
    orangeBoxList.appendChild(newContent)
}

// append both 
orangeBox.append(orangeBoxHeader, orangeBoxList)
document.body.appendChild(orangeBox)
