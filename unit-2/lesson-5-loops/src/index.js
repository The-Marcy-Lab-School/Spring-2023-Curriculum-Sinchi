// // standard
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// // change the start
// for (let i = 3; i < 11; i++) {
//   console.log(i);
// }

// // change the end
// for (let i = 0; i < 21; i++) {
//   console.log(i);
// }

// // change the increment
// for (let i = 1; i < 31; i *= 3) {
//   console.log(i);
// }

// // go down not up
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// const string = 'hello world';
// for (let i = 0; i < string.length; i++) {
//   console.log(string[i], i);
// }

// for (let i = 1; i < 11; i++) {
//   console.log('I log every time');
//   if (!(i === 4) && !(i === 7)) {
//     console.log("Sure glad this isn't 4 or 7");
//     console.log(i);
//   }
// }

// simpler guard clause with continue
// for (let i = 1; i < 11; i++) {
//   console.log('I log every time');
//   if (i === 4 || i === 7) continue;
//   console.log("Sure glad this isn't 4 or 7");
//   console.log(i);
// }

// for (let i = 0; i < 11; i++) {
//   if (i > 5) break;
//   console.log(i);
// }

const testBreak = () => {
    for (let i = 0; i < 5; i++) {
        if (i > 3) break;
        console.log(i);
    }
    console.log('I log!');
};

const testReturn = () => {
    for (let i = 0; i < 5; i++) {
        if (i > 3) return;
        console.log(i);
    }
    console.log('I do not log.');
};

testBreak();
testReturn();
