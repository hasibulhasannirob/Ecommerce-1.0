const router = require("express").Router();
const { signIn, signUp } = require("../controllers/userControllers");

router.route("/signup").post(signUp);

router.route("/signIn").post(signIn);

module.exports = router;
