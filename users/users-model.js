const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("users").select("id", "first_name", "last_name", "email", "username");
  // TODO what information about other users do we want to return to a single user?
}

function findBy(filter) {
  return db("users")
    .select("id","username", "first_name", "last_name", "email","password")
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
    .select("id", "username", "email")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
  .where({id})
  .del()
}

function update(id, changes) {
  return db("users")
  .where({id})
  .update(changes)
  .then(count => {
   return findById(id);
  })
}
