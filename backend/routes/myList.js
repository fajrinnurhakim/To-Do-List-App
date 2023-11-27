const express = require("express");
const router = express.Router();
const MyListController = require("../controllers/myListsController");

router.get("/", MyListController.findAll);
router.get("/:id", MyListController.findOne);
router.post("/", MyListController.create);
router.put("/:id", MyListController.update);
router.delete("/:id", MyListController.destroy);

module.exports = router;
