const prompt = require('prompt-sync')({ sigint: true });

// // while loop and identical for loop examples
// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

while (true) {
    const input = prompt('Enter a number or q to quit: ');
    if (input === 'q') {
        console.log('Bye!');
        break;
    }
    console.log(`${input}? That's a great number!`);
}

// You can still use incrementor vars
let round = 1;
while (true) {
    console.log(`${round}: go!`);
    const input = prompt('Hit any key to continue or q to quit: ');
    if (input === 'q') {
        console.log(`We made it through ${round} rounds!`);
        break;
    }
    round++;
}

