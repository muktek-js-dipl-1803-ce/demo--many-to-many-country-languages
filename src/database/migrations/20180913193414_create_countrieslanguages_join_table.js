
exports.up =  function(knex, Promise) {

  return knex.schema.createTable('country_languages', function(table){

      table.increments('id')

      table.integer('languages_id')
        .unsigned()
        .references('id')
        .inTable('languages')

      table.integer('countries_id')
        .unsigned()
        .references('id')
        .inTable('countries')

      return table
  })
};

exports.down = async function(knex, Promise) {

    return knex
      .schema
      .dropTableIfExists('country_languages')

}
