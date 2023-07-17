console.clear();
console.log('-----------------------------------')

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  haveBirthday() {
    this.age++;
    console.log(`I'm ${this.age} years old now!`);
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    
    this.grade = grade
  }

  learn(subject) {
    console.log(`I'm learning ${subject}!`)
  }

  // polymorphism - alter parent methods but keep the name the same
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}, and I'm in grade ${this.grade}.`);
  }
}

const jay = new Student('Jay', 18, 12);
console.log('Jay:', jay);
// use existing methods
jay.haveBirthday();

// add new methods
jay.learn('Math');

// polymorphism - alter parent methods
jay.greet();

const bob = new Person('bob', 12)
bob.greet();


console.log('bob instance of Person?  :', bob instanceof Person);
console.log('jay instance of Person?  :', jay instanceof Person);
console.log('bob instance of Student?  :', bob instanceof Student);
console.log('jay instance of Student?  :', jay instanceof Student);
console.log('jay instance of Object?  :', jay instanceof Object);
console.log('jay instance of Object?  :', jay.toString()); // we can access this method because it's on the Object prototype