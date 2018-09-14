const countryLanguageSeeds = [
  //German
  // -- country: Switzerland
  {id: 1, languages_id: 4, countries_id: 3},
  {id: 2, languages_id: 4, countries_id: 4},
  {id: 3, languages_id: 4, countries_id: 9},

  //English
  // -- country: Belize
  {id: 4, languages_id: 1, countries_id: 1 },
  // -- country: United States
  {id: 5, languagesk_id: 1, countries_id: 2 },
  {id: 6, languages_id: 1, countries_id: 6 },
  {id: 7, languages_id: 1, countries_id: 7 },
  {id: 8, languages_id: 1, countries_id: 8 },
  {id: 9, languages_id: 1, countries_id: 11 },
  {id: 10, languages_id: 1, countries_id: 14 },

  //language: Spanish
  // -- country: Belize
  {id: 12, languages_id: 3, countries_id: 1 },
  // -- country: United States
  {id: 13, languages_id: 3, countries_id: 2 },
  {id: 14, languages_id: 3, countries_id: 7 },
  {id: 15, languages_id: 3, countries_id: 11 },
  {id: 16, languages_id: 3, countries_id: 12 },
  {id: 17, languages_id: 3, countries_id: 13 },
  // -- country: Colombia
  {id: 18, languages_id: 3, countries_id: 15},

  //French
  // -- Country: Switzerland
  {id: 19, languages_id: 2, countries_id: 3},
  {id: 20, languages_id: 2, countries_id: 5 },
  {id: 21, languages_id: 2, countries_id: 6 },
  {id: 22, languages_id: 2, countries_id: 8 },
  {id: 23, languages_id: 2, countries_id: 10 }
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('country_languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('country_languages').insert(countryLanguageSeeds);
    });
};
