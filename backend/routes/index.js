const express = require("express");
const router = express.Router();
const myListRouter = require("./myList.js");
const AccountRouter = require("./user.js");
const AuthRouter = require("./auth.js");

router.use("/myLists", myListRouter);
router.use("/users", AccountRouter);
router.use("/auth", AuthRouter);

module.exports = router;
