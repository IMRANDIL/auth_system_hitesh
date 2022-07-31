const router = require("express").Router();

const { dashboardController } = require("../controllers/DashboardController");
const { authMiddleware } = require("../middlewares/AuthMiddleware");

router.route("/dashboard").get(authMiddleware, dashboardController);

module.exports = router;
