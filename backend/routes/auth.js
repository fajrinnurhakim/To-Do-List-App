const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController.js");
const upload = require("../middlewares/multer");

router.post("/register", upload.single("image"), AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
