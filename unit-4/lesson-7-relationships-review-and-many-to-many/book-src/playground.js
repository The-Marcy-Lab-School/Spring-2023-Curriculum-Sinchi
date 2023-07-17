const Book = require('./Book');
const BookGenre = require('./BookGenre');
const Genre = require('./Genre');

console.clear();
console.log('\n---------------------------------------------');

const dune = new Book("Dune", BookGenre, Genre);
const sciFi = new Genre("Sci-Fi", BookGenre, Book);
const horror = new Genre("Horror", BookGenre, Book);

dune.addGenre(sciFi.id);
horror.addBook(dune.id);
console.log('\nhorror.books():', horror.books());
console.log('\nsciFi.books():', sciFi.books());
console.log('\ndune.genres() Before:', dune.genres());

dune.removeGenre(horror.id)
sciFi.delete();

console.log('\ndune.genres() after:', dune.genres());
console.log('\nBook.list():', Book.list());
console.log('\nGenre.list():', Genre.list());
