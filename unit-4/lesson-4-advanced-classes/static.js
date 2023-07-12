class Person {
    static #all = []; // class properties can also be private!
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
  
      Person.#all.push(this);
    }
  
    static list() {
      return [...Person.#all]; // still technically mutable but good enough
    }
  
    static hello() {
      console.log('hello from mankind');
    }
  
    static findByName(givenName) {
      // look up `Short Circuiting` if you don't know what || is doing
      return Person.#all
        .find((person) => (person.name === givenName)) || null;
    }
  
    static createMany(people) {
      people.forEach(({ name, age }) => new Person(name, age));
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const zo = new Person('Zo', 32);
  zo.greet();
  console.log('zo:', zo);
  
  Person.createMany([
    { name: 'Ash', age: 82 },
    { name: 'bob', age: 82 },
    { name: 'tom', age: 82 },
    { name: 'greg', age: 82 },
  ]);
  
  const ash = Person.findByName('Ash');
  console.log('ash:', ash);
  
  console.log('Person.all:', Person.list());