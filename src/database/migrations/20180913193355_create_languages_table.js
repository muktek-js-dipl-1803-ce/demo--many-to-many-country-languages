
exports.up = function(knex, Promise) {
  return knex.schema.createTable('languages', function(table){
    table.increments('id');
    table.string('name');
    return table
  })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('languages')
};
