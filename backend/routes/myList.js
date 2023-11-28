const express = require("express");
const router = express.Router();
const MyListController = require("../controllers/myListsController");
const authenticateToken = require("../middlewares/authentication.js");

router.get("/", authenticateToken, MyListController.findAll);
router.get("/:id", authenticateToken, MyListController.findOne);
router.post("/", authenticateToken, MyListController.create);
router.put("/:id", authenticateToken, MyListController.update);
router.delete("/:id", authenticateToken, MyListController.destroy);

module.exports = router;
