// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/expat.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
   
  
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/expat-test.db3"
    },
    
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
