const express = require("express");
const router = express.Router();
const myListRouter = require("./myList.js");
const AccountRouter = require("./user.js");

router.use("/myLists", myListRouter);
router.use("/users", AccountRouter);

module.exports = router;
