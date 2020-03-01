const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");

const usersRouter = require("../users/users-router.js");


const restricted = require("../auth/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);
router.use("/stories", restricted, usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "api endpoint is working." });
});

module.exports = router;
