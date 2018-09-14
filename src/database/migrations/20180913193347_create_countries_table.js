
exports.up = function(knex, Promise) {
  return knex.schema.createTable('countries', function(table){
    table.increments('id')
    table.string('name');
    table.string('capital')
    table.integer('population');
    return table
  })

};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('countries')
};
