const bcrypt = require("bcryptjs");

const router = require("express").Router();

const jwt = require("jsonwebtoken");

const Users = require("../users/users-model.js");
const { jwtSecret } = require("../config/secret.js");

// Add a user

router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;
  if (
    !user ||
    !user.first_name ||
    !user.last_name ||
    !user.email ||
    !user.password
  ) {
    res.status(401).json({
      message: "Please provide all requested registration information"
    });
  } else {
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(({ name, message, stack, code }) => {
        res.status(500).json({ name, message, stack, code });
      });
  }
});

// sends login data; logs in a user

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res
      .status(401)
      .json({ message: "Please provide a username and password." });
  } else {
    Users.findBy({ username })
      .first()
      .then(user => {
        console.log(user);
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);

          res.status(200).json({ message: `Welcome ${user.username}!`,id:user.id, token });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(({ name, message, stack, code }) => {
        res.status(500).json({ name, message, stack, code });
      });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "4h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
