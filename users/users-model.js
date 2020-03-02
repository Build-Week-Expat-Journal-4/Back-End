const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("username");
  // TODO what information about other users do we want to return to a single user?
}

function findBy(filter) {
  return db("users")
    .select("id","username", "first_name", "last_name", "email")
    .where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
