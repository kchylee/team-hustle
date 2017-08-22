
exports.up = function(knex, Promise) {
  return knex.schema.table('branch_books', function(table) {
    table.integer('branch_id');
    table.foreign('branch_id').references('branches.id').onDelete('CASCADE');
    table.integer('book_id');
    table.foreign('book_id').references('books.id').onDelete('CASCADE');
    table.integer('frequency');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('branch_books', function(table) {
    table.dropForeign('branch_id');
    table.dropColumn('branch_id');
    table.dropForeign('book_id');
    table.dropColumn('book_id');
    table.dropColumn('frequency');
  });
};
