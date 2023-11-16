/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genre_books').del()
  await knex('books').del()
  await knex('genres').del()

  const { rows: books } = await knex.raw(`
    INSERT INTO books (title, pages) VALUES
      ('Kujo', 180),
      ('Dune', 999),
      ('LOTR', 1000),
      ('The Hobbit', 300),
      ('Little Women', 500)
    RETURNING *;
  `)

  const { rows: genres } = await knex.raw(`
  INSERT INTO genres (name, is_popular) VALUES
    ('Sci-Fi', true),
    ('Fantasy', true),
    ('horror', false),
    ('avant-garde', false)
  RETURNING *;
  `);

  console.log('books:', books);
  console.log('genres:', genres);

  const [ kujo, dune, lotr, hobbit ] = books;
  const [ sciFi, fantasy, horror ] = genres;

  const makeAssociationStr = `INSERT INTO genre_books (book_id, genre_id) VALUES (?, ?)`
  await knex.raw(makeAssociationStr, [kujo.book_id, horror.genre_id]);
  await knex.raw(makeAssociationStr, [lotr.book_id, fantasy.genre_id]);
  await knex.raw(makeAssociationStr, [hobbit.book_id, fantasy.genre_id]);
  await knex.raw(makeAssociationStr, [dune.book_id, sciFi.genre_id]);
  await knex.raw(makeAssociationStr, [dune.book_id, horror.genre_id]);

  const { rows: booksAndGenres } = await knex.raw(`
    SELECT books.*, genres.*
    FROM books
    JOIN genre_books
    ON genre_books.book_id = books.book_id
    JOIN genres
    ON genre_books.genre_id = genres.genre_id;
  `);

  console.log('booksAndGenres:', booksAndGenres);
};
