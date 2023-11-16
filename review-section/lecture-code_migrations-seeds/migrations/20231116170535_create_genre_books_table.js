/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('genre_books', (table) => {
    table.increments();
    table.integer('book_id').index()
      .references('book_id')
      .inTable('books')
      .onDelete('CASCADE');
    table.integer('genre_id').index()
      .references('genre_id')
      .inTable('genres')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('genre_books');
};