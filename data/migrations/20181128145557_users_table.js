
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl
            .string('username', 127)
            .notNullable()
            .unique();
        tbl
            .string('password', 255)
            .notNullable();
        tbl
            .string('departments', 255);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
};