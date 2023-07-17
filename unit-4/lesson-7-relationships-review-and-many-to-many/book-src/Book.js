const { getId } = require('./utils');

class Book {
  static #all = [];

  constructor(title, BookGenreClass, GenreClass) {
    this.title = title;
    this.id = getId();
    this.BookGenreClass = BookGenreClass;
    this.GenreClass = GenreClass;

    Book.#all.push(this);
  }

  static list() {
    return [...Book.#all];
  }

  static findBy(bookId) {
    return Book.#all.find((({ id }) => id === bookId));
  }

  genres() {
    return this.BookGenreClass.listGenresForBook(this.id)
  }

  addGenre(genreId) {
    return new this.BookGenreClass(this.id, genreId, Book, this.GenreClass);
  }

  removeGenre(genreId) {
    this.BookGenreClass.findBy(this.id, genreId).delete();
  }

  delete() {
    const idx = Book.all.findIndex(book => book.id === this.id);
    Book.all.splice(idx, 1);

    this.BookGenreClass.listByBook(this.id)
      .forEach(bookGenre => bookGenre.delete());

    return true;
  }
}

module.exports = Book;

