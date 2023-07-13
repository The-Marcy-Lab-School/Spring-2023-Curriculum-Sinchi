const { getId } = require('./utils');

class Genre {
  static all = [];
  constructor(name, BookGenreClass, BookClass) {
    this.name = name;
    this.id = getId();
    this.BookGenreClass = BookGenreClass;
    this.BookClass = BookClass;

    Genre.all.push(this);
  }

  static findBy(genreId) {
    return Genre.all.find(((genre) => genre.id === genreId));
  }

  books() {
    return this.BookGenreClass.listByGenre(this.id)
    .map(bookGenre => bookGenre.book())
  }

  addBook(bookId) {
    return new this.BookGenreClass(bookId, this.id);
  }

  removeGenre(bookId) {
    this.BookGenreClass.find(bookId, this.id).delete();
  }

  delete() {
    const idx = Genre.all.findIndex(genre => genre.id === this.id);
    Genre.all.splice(idx, 1);

    this.BookGenreClass.listByGenre(this.id)
      .forEach(bookGenre => bookGenre.delete());

    return true;
  }
}

module.exports = Genre;
