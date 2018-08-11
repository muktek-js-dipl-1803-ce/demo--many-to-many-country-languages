// Update with your config settings.

const devDbConfig =  {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : '5432',
    user : 'dba_bookbook',
    password : 'passpass',
    database : 'bookbook'
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
