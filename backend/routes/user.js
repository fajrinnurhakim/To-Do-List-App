const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");
const authenticateToken = require("../middlewares/authentication.js");

router.get("/", authenticateToken, UserController.findAll);
router.get("/:id", authenticateToken, UserController.findOne);
router.post("/", authenticateToken, UserController.create);
router.put("/:id", authenticateToken, UserController.update);
router.delete("/:id", authenticateToken, UserController.destroy);

module.exports = router;
