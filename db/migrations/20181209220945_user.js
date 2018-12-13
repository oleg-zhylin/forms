exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('login');
            table.string('token');
            table.string('password');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};