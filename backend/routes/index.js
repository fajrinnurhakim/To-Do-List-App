const express = require("express");
const router = express.Router();
const todoRouter = require("./todo.js");
const AccountRouter = require("./user.js");
const AuthRouter = require("./auth.js");

router.use("/todos", todoRouter);
router.use("/users", AccountRouter);
router.use("/auth", AuthRouter);

module.exports = router;
