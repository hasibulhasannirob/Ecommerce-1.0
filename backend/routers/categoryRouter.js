const router = require("express").Router();
const {
  createCategory,
  getCategories,
} = require("../controllers/categoryController");

const admin = require("../middlewares/admin");
const authorize = require("../middlewares/auth");

router.route("/").post([authorize, admin], createCategory).get(getCategories);

module.exports = router;