// Update with your config settings.
const settings = require('./settings.json');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : settings.user,
      password : settings.password,
      database : settings.password,
      port: 5432,
      ssl: true
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

