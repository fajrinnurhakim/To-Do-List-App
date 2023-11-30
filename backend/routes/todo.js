const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todosController.js");
const authenticateToken = require("../middlewares/authentication.js");

router.get("/", authenticateToken, TodoController.findAll);
router.get("/:id", authenticateToken, TodoController.findOne);
router.post("/", authenticateToken, TodoController.create);
router.put("/:id", authenticateToken, TodoController.update);
router.delete("/:id", authenticateToken, TodoController.destroy);

module.exports = router;
