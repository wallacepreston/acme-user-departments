const Knex = require('knex');

module.exports = {
  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      database: 'acme-user-departments'
    },
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
    // useNullAsDefault: true,
    // debug: true,
  }
};