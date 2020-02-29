exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();

    tbl.string("first_name", 255).notNullable();

    tbl.string("last_name", 255).notNullable();
    
    tbl.varchar("email", 255).notNullable();
    
    tbl
    .varchar("username", 128)
    .notNullable()
    .unique()
    .index();
    
    
    tbl.varchar("password", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
