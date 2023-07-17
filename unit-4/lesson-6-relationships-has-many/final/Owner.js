// We didn't get to this delete stuff, but check it out!
const { getId } = require('../src/utils');

class Owner {
  static #all = [];
  constructor(name, catClass) {
    this.id = getId();
    this.name = name;
    this.catClass = catClass; // dependency injection

    Owner.#all.push(this);
  }

  static list() {
    return [...Owner.#all];
  }

  static find(id) {
    return Owner.#all.find(owner => owner.id === id) || null;
  }

  static create(name, catClass) {
    return new Owner(name, catClass);
  }

  cats() {
    return this.catClass.listByOwner(this.id);
  }

  findCat(catId) {
    return this.cats()
      .find(cat => cat.id === catId) || null;
  }

  createCat(catName) {
    return new this.catClass(catName, this.id, Owner);
  }

  deleteCat(catId) {
    const cat = this.findCat(catId)
    return (cat) ? cat.delete() : false;
  }

  delete() {
    this.cats().forEach(cat => cat.delete());
    const idx = Owner.#all
      .findIndex(owner => owner.id === this.id);
    Owner.#all.splice(idx, 1);
    return true;
  }
}

module.exports = Owner;