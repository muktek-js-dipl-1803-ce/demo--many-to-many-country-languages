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

}

module.exports = Country
