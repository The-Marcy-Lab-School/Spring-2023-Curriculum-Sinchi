const { getId } = require('./utils');

class Cat {
  static #all = [];

  constructor(name, ownerId, ownerClass) {
    this.id = getId();
    this.name = name;
    this.ownerId = ownerId;
    this.ownerClass = ownerClass;

    Cat.#all.push(this);
  }

  static listByOwner(ownerId) {
    return [...Cat.#all].filter((cat)=> {
      return ownerId === cat.ownerId;
    });
  }

  static create(name, ownerId, ownerClass) {
    return new Cat(name, ownerId, ownerClass);
  }

  owner() {
    return this.ownerClass.list().find((owner) => {
      return owner.id === this.ownerId;
    })
  }
}

module.exports = Cat;

