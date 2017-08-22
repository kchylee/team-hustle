
exports.up = function(knex, Promise) {
  return knex.schema.table('book_category', function(table) {
    table.integer('book_id');
    table.foreign('book_id').references('book.id').onDelete('CASCADE');
    table.integer('category_id');
    table.foreign('category_id').references('keyword.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('book_category', function(table) {
    table.dropForeign('book_id');
    table.dropColumn('book_id');
  })
};
