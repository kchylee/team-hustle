
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments('id');
    table.integer('isbn');
    table.string('category').notNullable();
    table.string('title').notNullable();
    table.string('abstract');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
