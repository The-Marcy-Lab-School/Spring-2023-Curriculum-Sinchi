require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port: process.env.PG_PORT || 5432,
      host: process.env.PG_HOST || '127.0.01',
      user: process.env.PG_USER || 'postgres',
      database: process.env.PG_DATABASE || 'migration_practice',
      password: process.env.PG_PASSWORD || 'postgres'
    },
  },
  staging: {
    client: 'pg',
    connection: {
      connectionString: process.env.PG_CONNECTION_STRING,
      ssl: { rejectUnauthorized: false },
    },
  },
};