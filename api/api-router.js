const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");

const usersRouter = require("../users/users-router.js");

// TODO restricted middleware here

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "router is working." });
});

module.exports = router;
