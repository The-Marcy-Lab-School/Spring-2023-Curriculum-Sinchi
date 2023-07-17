class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet(otherName) {
      console.log(`Hi ${otherName}, I'm ${this.name}`);
    }
  }
  
  // old way
  class PersonBind {
    constructor(name) {
      this.name = name;
      this.greet = this.greet.bind(this);
    }
  
    greet(otherName) {
      console.log(`Hi ${otherName}, I'm ${this.name}`);
    }
  }
  
  // new way
  class PersonArrow {
    constructor(name) {
      this.name = name;
    }
  
    greet = (otherName) => {
      console.log(`Hi ${otherName}, I'm ${this.name}`);
    };
  }
  // Why arrows over bind?
  // Arrows are more concise, we don't retype function name 2 times,
  // which means fewer chances for typos
  
  // notice the cost though
  const jay = new Person('Jay');
  console.log('jay:', jay);
  
  const tom = new PersonArrow('Tom');
  console.log('tom:', tom);
  // binding the `this` to the instance
  // means it's not on the prototype
  // only do it if you need to