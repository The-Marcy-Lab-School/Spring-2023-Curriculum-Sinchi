const Book = require('./Book');
const BookGenre = require('./BookGenre');
const Genre = require('./Genre');


const dune = new Book("Dune", BookGenre, Genre);
const sciFi = new Genre("Sci-Fi", BookGenre, Book);
const horror = new Genre("Horror", BookGenre, Book);

dune.addGenre(sciFi.id);
dune.addGenre(horror.id);
console.log('dune.genres():', dune.genres());
console.log('sciFi.books():', sciFi.books());

dune.removeGenre(horror.id)
sciFi.delete();
