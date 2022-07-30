const router = require("express").Router();

const { registerUser } = require("../controllers/AuthController");

router.post("/register", registerUser);

module.exports = router;
