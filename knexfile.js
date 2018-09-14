// Update with your config settings.

const devDbConfig =  {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : '5432',
    user : 'dba_countrylanguages',
    password : 'passpass',
    database : 'countrylanguages'
  },

  migrations : {
    directory : './src/database/migrations'
  },

  seeds : {
    directory : './src/database/seeds'
  }
}

module.exports = {
  development: devDbConfig
};
