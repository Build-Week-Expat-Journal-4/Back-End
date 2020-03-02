
exports.up = function(knex) {
  return knex.schema.createTable('stories', tbl=> {
      tbl.increments();
      tbl.string('title',255).notNullable();
      tbl.string('story',1000).notNullable();
      tbl.string('img-link',255).notNullable();
      tbl.date('date-pic-taken').notNullable();
      tbl.string('location',255).notNullable();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.timestamps(true,true);
      tbl.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

  })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('stories');
};
