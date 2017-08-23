
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments('id');
    table.bigInteger('isbn').notNullable();
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.text('abstract');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
