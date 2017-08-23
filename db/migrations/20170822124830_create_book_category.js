
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_category', function(table) {
    table.integer('book_id');
    table.foreign('book_id').references('books.id').onDelete('CASCADE');
    table.integer('category_id');
    table.foreign('category_id').references('categories.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_category', function(table) {
    table.dropForeign('book_id');
    table.dropColumn('book_id');
    table.dropForeign('category_id');
    table.dropColumn('category_id');
  })
};