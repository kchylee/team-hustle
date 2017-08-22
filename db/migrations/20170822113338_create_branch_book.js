
exports.up = function(knex, Promise) {
  return knex.schema.table('branch_books', function(table) {
    table.integer('branch_id').references('branches.id').onDelete('CASCADE');
    table.integer('isbn').references('books.isbn').onDelete('CASCADE');
    table.integer('checkout_frequency');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('branch_books', function(table) {
    table.dropForeign('branch_id');
    table.dropColumn('branch_id');
    table.dropForeign('isbn');
    table.dropColumn('isbn');
    table.dropColumn('checkout_frequency');
  });
};
