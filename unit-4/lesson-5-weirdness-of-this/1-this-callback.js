const bob = {
    name: 'Bob',
    greet(otherName) {
      console.log(`Hi ${otherName}, I'm ${this.name}.`);
    },
  };
  
  console.log('\ngood ------------------------------');
  bob.greet('Jane');
  
  console.log('\n??? ------------------------------');
  ['Mr. smith', 'Mrs. Smith'].forEach(bob.greet);
  
  // you think bob is the owner, but this is essentially what's happening
  console.log('\nBreaker Callback -----------------', );
  const breaker = (callback, ...args) => {
    callback(...args); // WHO'S THE OWNER?
  };
  
  breaker(bob.greet, 'Breaker');
  
  // or something even more confusing
  console.log('\nBreaker Callback but worse -----------------', );
  const breaker2 = (callback, ...args) => {
    const terrible = { name: 'Terrible' };
    terrible.greet = callback;
    terrible.greet(...args);
  };
  
  breaker2(bob.greet, 'Breaker2');
  
  // moral of the story:
  // once you pass it into the callback, you have no way to know what `this` is