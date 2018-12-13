
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('forms', function (table) {
            table.increments('id').primary();
            table.json('params');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('forms');
};
