# Many-To-Many Notes

### Concept

(1) A country has many languages

  + United States
    - Spanish
    - English

(2) A language has many countries

  + Spanish
    - United States
    - Mexico
    - Spain

  + English
    - United States
    - Great Britain
    - Ireland

We need to create a **join table** to connect a many-to-many relation between entities

### Files

`src/database/migrations/20180913193414_create_countrieslanguages_join_table.js`
  + create the migration for the join table
    - the join table between _languages_ table and _countries_ table will be called : _country_languages_

  + the _country_languages_ join table has 2 foreign keys
    - `languages_id` references the languages table
    - `countries_id` references the countries table

`src/database/seeds/03-countrylanguages.js`
  + create the seeds for each country's language
  + for example:
    - in languages table:  
      - id for 'english' record is `1`
      - id for 'french' is `2`
      - id for 'spanish' is `3`
    - in countries table
      - id for united states is `10`
      - canada is `20`
      - mexico is `30`

  ```js
  {id: 1, country_id: 10, language_id: 1}, // country : USA   | language : English
  {id: 2, country_id: 10, language_id: 3}, // country : USA    | language : Spanish
  {id: 3, country_id: 20, language_id: 1}, // country : Canada | language : English
  {id: 4, country_id: 20, language_id: 2}, // country : Canada | language : French
  {id: 5, country_id: 30, language_id: 3}  // country : Mexico | language : Spanish
  ```

`src/models/Language.js`
  + from the 'languages' table, query for the 'countries' recordsFromDb

  ```js
  const { Model } = require('objection')

  class Country extends Model {

    static get tableName(){
      return 'countries'
    }

    static get relationMappings(){
      const Language = require('./Language.js')

      return {
        languages : {
          //(1) declare Model.ManyToManyRelation
          relation : Model.ManyToManyRelation,
          modelClass : Language,
          join : {
            // (2) FROM this model's table's primary key
            from : 'countries.id',
            // (3) THROUGH the join table
            through : {
              // (4a) secondary key REFERENCING this model's primary key
              from : 'country_languages.countries_id',
              // (4b) secondary key REFERENCING the target table's  primary key
              to : 'country_languages.languages_id'
            },
            // (5) TO the table's primary key that contains the related data
            to : 'languages.id'
          }
        }
      }
    }
  ```
