function settingThis(...args) {
    console.log("here's the args:", args);
    console.log('this is now:', this);
  }
  
  console.log('\n default --------------------', );
  settingThis(); // global by default
  
  console.log('\n call --------------------', );
  // .call is for individual args
  settingThis.call({ a: 1 }, 'Hello!', 'Goodbye!');
  
  console.log('\n apply --------------------', );
  // .apply is for an array of args
  settingThis.apply({ b: 2 }, ['Yes please!', 'No thank you!']);
  
  console.log('\n forEach --------------------', );
  // Higher orders functions usually have a 2nd "this" argument
  // here we're passing in tim as the "this" value
  const tim = {
    name: 'Tim',
    greet(otherName) {
      console.log(`Hi ${otherName}, I'm ${this.name}.`);
    },
  };
  ['Mr. Connors', 'Mrs. Connors'].forEach(tim.greet, tim);
  
  console.log('\n .bind --------------------', );
  // or we could use .bind to reassign a *new* function
  tim.greet = tim.greet.bind(tim);
  ['Mr. Johnson', 'Mrs. Johnson'].forEach(tim.greet);