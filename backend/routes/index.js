const express = require("express");
const router = express.Router();
const myListRouter = require("./myList.js");
const AccountRouter = require("./account.js");

router.use("/myLists", myListRouter);
router.use("/accounts", AccountRouter);

module.exports = router;
