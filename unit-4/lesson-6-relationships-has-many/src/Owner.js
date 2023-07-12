const { getId } = require('./utils');

class Owner {
  static #all = [];

  constructor(name, catClass) {
    this.id = getId();
    this.name = name;
    this.catClass = catClass;

    Owner.#all.push(this);
  }

  static list() {
    return [...Owner.#all];
  }

  static findById(id) {
    return Owner.#all.find(owner => owner.id === id) || null;
  }

  static create(name, catClass) {
    return new Owner(name, catClass);
  }

  cats() {
    return this.catClass.listByOwner(this.id)
  }
}

module.exports = Owner;