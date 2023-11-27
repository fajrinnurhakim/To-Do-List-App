const express = require("express");
const router = express.Router();
const AccountController = require("../controllers/accountsController");

router.get("/", AccountController.findAll);
router.get("/:id", AccountController.findOne);
router.post("/", AccountController.create);
router.put("/:id", AccountController.update);
router.delete("/:id", AccountController.destroy);

module.exports = router;
