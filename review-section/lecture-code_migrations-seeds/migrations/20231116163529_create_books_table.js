/*
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.up = async function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('book_id');
    table.string('title');
    table.integer('pages');
  });
 };

 /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex) {
  return knex.schema.dropTable('books');
 };