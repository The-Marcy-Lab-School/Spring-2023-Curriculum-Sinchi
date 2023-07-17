const { getId } = require('./utils');

class BookGenre {
  static #all = [];

  constructor(bookId, genreId, BookClass, GenreClass) {
    if (BookGenre.findBy(bookId, genreId)) {
      throw new Error("BookGenre already exists!");
    }
    this.id = getId();
    this.bookId = bookId;
    this.genreId = genreId;
    this.BookClass = BookClass;
    this.GenreClass = GenreClass;

    BookGenre.#all.push(this);
  }

  static findBy(bookId, genreId) {
    return BookGenre.#all.find(bookGenre => (
      bookGenre.bookId === bookId && bookGenre.genreId === genreId
    ));
  }

  static list() {
    return [...BookGenre.#all];
  }

  static listByBook(bookId) {
    return BookGenre.#all.filter(bookGenre => bookGenre.bookId === bookId);
  }

  static listByGenre(genreId) {
    return BookGenre.#all.filter(bookGenre => bookGenre.genreId === genreId);
  }

  static listGenresForBook(bookId) {
    return BookGenre.listByBook(bookId).map((bookGenre) => bookGenre.genre())
  }

  static listBooksForGenre(genreId) {
    return BookGenre.listByGenre(genreId).map((bookGenre) => bookGenre.book())
  }

  book() {
    return this.BookClass.findBy(this.bookId);
  }

  genre() {
    return this.GenreClass.findBy(this.genreId);
  }

  delete() {
    const idx = BookGenre.#all
      .findIndex(bookGenre => {
        if (bookGenre.id === this.id) {
          bookGenre.bookId = null;
          bookGenre.genreId = null;
          return true;
        }
      })

    BookGenre.#all.splice(idx, 1);
    return true;
  }
}

module.exports = BookGenre;
