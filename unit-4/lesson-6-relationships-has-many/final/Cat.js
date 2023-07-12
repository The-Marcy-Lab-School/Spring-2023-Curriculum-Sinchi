// We didn't get to this delete stuff, but check it out!

const { getId } = require('../src/utils');

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
    return Cat.#all.filter(cat => cat.ownerId === ownerId);
  }

  owner() {
    return this.ownerClass.find(this.ownerId)
  }

  delete() {
    this.ownerId = null;
    const idx = Cat.#all.findIndex(cat => cat.id === this.id);
    Cat.#all.splice(idx, 1);
    return true;
  }
}

module.exports = Cat;
