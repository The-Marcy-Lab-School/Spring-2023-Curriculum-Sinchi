/**
 * REMEMBER: concepts over code! You will likely never write bare metal 
 * promises like this, and instead will use promises returned by other
 * librarys. But we must understand the fundamental before we fly! 
 * Async bugs are hard to catch and impossible if you don't know the 
 * underlying mechanics. If you understand these raw principles though,
 * you will always be ok in the end. 
 */

// Here is the full example using the new Promise sytnax
// new Promise takes a callback of (resolve, reject) =>  
const myPromiseFull = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 50) {
    resolve('Success!');
  } else {
    reject(new Error('Failure.')); // when rejecting, always reject an error object
  }
});


// Here's the full syntax but using a guard clause 
// remember, the magic comes from calling resolve/reject.
// The passed in value is what the Promise ultimately returns.
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 < 50) return resolve('Success!');
  reject(new Error('Failure!'));
});

// Here are the short hand version
const resolveShort = Promise.resolve('Good and quick!');
const rejectShort = Promise.reject(new Error('Bad...but quick!'));


// Promises can be chained. The .then takes in whatever the 
// promise before returned. And if .then returns a value, 
// it is always wrapped in a promise, so you can chain another .then
myPromise
  .then(console.log)
  .then((value) => {
    console.log("catch ITSELF doesn't throw:", value);
  })
  .catch(error => {
    console.error(error.message);
    console.error(error);
    return 'All good now!';
  })

// .then takes in resolved promises, .catch catches rejects and thrown errors 
// it RETURNS a resolved promise though, this is so you can work with the 
// value in another promise if you want 


// Timers allow us to run code after a moment or every interval
setTimeout(() => {
  console.log("It's been a second!");
}, 1000); // the number is milliseconds, 1000 = 1 second


// Set interval does something EVERY set of ms
// you need to save it to a variable if you ever 
// want to call clearInterval to STOP doing something 
const interval = setInterval(() => {
  console.log("ever half second I run!");
}, 500);

// You can also use clearInterval anywhere (even inside the original)
// setInterval callback. So you could stop if a value is true, or if 
// a user hits a button
setTimeout(() => {
  clearInterval(interval);
  console.log("I'm stopping the interval!");
}, 5000);


// PROMISIFYING
// You'll likely never need to do this, but if you CAN then you 
// fully understand the world of promise basics.
// Here we have doSomething that takes a callback. Notice how 
// it passes in an error or value to the callback, and notice how
// we use that logic to convert to a promise
const doSomething = (shouldFail, callback) => {
  if (shouldFail) {
    callback(new Error('Something went wrong.'));
  } else {
    callback(null, 'I did something right!!');
  }
}

const doSomethingPromise = (shouldFail) => {
  return new Promise((resolve, reject) => {
    doSomething(shouldFail, (error, value) => {
      if (error) return reject(error);
      resolve(value);
    }
  )});
}

// callback version
doSomething(false, (error, value) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(value);
});

// promise version
doSomethingPromise(false)
  .then(value => console.log(value))
  .catch(error => console.error(error));
  