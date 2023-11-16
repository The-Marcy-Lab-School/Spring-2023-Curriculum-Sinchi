-- Copy these as needed
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title TEXT,
  pages INTEGER
);

CREATE TABLE genres (
  genre_id SERIAL PRIMARY KEY,
  name TEXT,
  is_popular boolean
);

CREATE TABLE genre_books (
  id SERIAL PRIMARY KEY,
  genre_id INTEGER REFERENCES genres(genre_id),
  book_id INTEGER REFERENCES books(book_id),
  is_popular boolean
);

INSERT INTO books (title, pages) VALUES
  ('Kujo', 180),
  ('Dune', 999),
  ('lotr', 1000),
  ('The Hobbit', 300);
  ('Little Women', 400);

INSERT INTO genres (name, is_popular) VALUES
  ('Sci-Fi', true),
  ('Fantasy', true),
  ('horror', false);

-- All books and genres that have associations
SELECT books.*, genres.*
FROM books
JOIN genre_books
ON genre_books.book_id = books.book_id
JOIN genres
ON genre_books.genre_id = genres.genre_id;

-- All books with optional associations
SELECT books.*, genres.*
FROM books
LEFT JOIN genre_books
ON genre_books.book_id = books.book_id
LEFT JOIN genres
ON genre_books.genre_id = genres.genre_id;

-- All genres with optional associations
SELECT genres.*, books.*
FROM genres
LEFT JOIN genre_books
ON genre_books.genre_id = genres.genre_id
LEFT JOIN books
ON genre_books.book_id = books.book_id;

-- ALl Books And Genres regardless of associations
SELECT books.*, genres.*
FROM books
FULL OUTER JOIN genre_books
ON genre_books.book_id = books.book_id
FULL OUTER JOIN genres
ON genre_books.genre_id = genres.genre_id;
