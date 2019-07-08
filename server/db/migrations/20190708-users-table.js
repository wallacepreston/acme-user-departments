exports.up = knex => {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('name');
      table.integer('departmentId').references('departments.id');
  });
}

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('users');
}