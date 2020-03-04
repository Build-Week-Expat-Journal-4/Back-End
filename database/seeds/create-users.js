const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "John",
          last_name: "Doe",
          email: "tester@test.com",
          username: "test1",
          password: "test1"
        },
        {
          first_name: "Sally",
          last_name: "Doe",
          email: "tester@test.com",
          username: "test2",
          password: "test2"
        },
        {
          first_name: "Jim",
          last_name: "Doe",
          email: "tester@test.com",
          username: "test3",
          password: "test3"
        }
      ]);
    });
};
