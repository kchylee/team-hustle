
exports.up = function(knex, Promise) {
  return knex.schema.createTable('branches', function(table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('location').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('branches');
};
