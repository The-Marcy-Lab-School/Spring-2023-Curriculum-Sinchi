// Create object use literal notation

const myCar = {
    name: 'Tucson',
    maker: "Hyundai",
};

// add key/value pairs
myCar.color = 'Black'; // dot notation
myCar['model-year'] = 2019; // bracket notation

// access values
console.log(myCar.color); // Black
console.log(myCar['model-year']); // 2018

// update values
myCar.color = 'Blue';
console.log(myCar.color); // Blue

// delete values
delete myCar.color;
delete myCar['model-year'];

// if a value doesn't exist, it's undefined
console.log(myCar.color); // undefined
console.log(myCar['model-year']); // undefined