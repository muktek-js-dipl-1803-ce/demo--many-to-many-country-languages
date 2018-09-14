const countrySeeds = [
  {id: 1, name: 'Belize' , population: 370000, capital: 'Belize' },
  {id: 2, name: 'United States', population: 310000000, capital: 'Washington DC'},
  {id: 3, name: 'Switzerland', population: 310000000, capital: 'Zurich' },
  {id: 4, name: 'Germany',  population: 81770900, capital: 'Berlin'},
  {id: 5, name: 'France', population: 66710000, capital: 'Paris'},
  {id: 6, name: 'Canada', population: 66710000, capital: 'Ottawa'},
  {id: 7, name: 'Guam', population: 184200, capital: 'Hagatna'},
  {id: 8, name: 'Cameroon', population: 22709892, capital: 'Yaounde' },
  {id: 9, name : 'Austria', population: 8725931, capital: 'Vienna'},
  {id: 10, name: 'Belgium', population: 11319511, capital: 'Brussels'},
  {id: 11, name: 'Puerto Rico', population: 3474182, capital: 'San Juan'},
  {id: 12, name: 'Mexico', population: 122273473, capital: 'Mexico City'},
  {id: 13, name: 'Spain', population: 46438422, capital: 'Madrid'},
  {id: 14, name: 'Great Britain', population: 65110000, capital: 'London'},
  {id: 15, name: 'Colombia', population: 40110000, capital: 'Bogota'}

]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert(countrySeeds);
    });
};
