const knexConfig = {
  client: 'pg',
  connection: process.env.POSTGRES_INTERNAL_URL,
};

const knex = require('knex');

const knexInstance = knex(knexConfig);

module.exports = knexInstance;
