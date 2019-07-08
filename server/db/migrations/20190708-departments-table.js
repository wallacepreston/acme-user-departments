exports.up = knex => {
  return knex.schema
    .createTable('departments', table => {
      table.increments('id').primary();
      table.string('name');
  });
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('departments');
}