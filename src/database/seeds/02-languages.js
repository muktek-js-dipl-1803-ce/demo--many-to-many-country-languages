const languages = [
  {id: 1, name: 'English'},
  {id: 2, name: 'French'},
  {id: 3, name: 'Spanish'},
  {id: 4, name: 'German'}
]










exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert(languages);
    });
};
