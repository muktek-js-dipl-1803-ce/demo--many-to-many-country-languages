const { Model } = require('objection')

class Language extends Model {

  static get tableName(){
    return 'languages'
  }

  static get relationMappings(){
    const Country = require('./Country.js')

    return {
      countries: {
        relation : Model.ManyToManyRelation,
        modelClass : Country,
        join : {
          from : 'languages.id',
          through : {
            from : 'country_languages.languages_id',
            to : 'country_languages.countries_id'
          },
          to : 'countries.id'
        }
      }
    }

  }

}

module.exports = Language
