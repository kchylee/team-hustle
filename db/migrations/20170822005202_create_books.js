
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments('id'); // should be isbn?
    table.string('category').notNullable();
    table.string('title').notNullable();
    table.string('abstract');
    table.integer('checkout_frequency');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
