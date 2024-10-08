const { Router } = require("express");
const { signIn, signUp } = require("../controllers/auth-controller");

const router = Router();

router.route("/signup").post(signUp);
router.route("/signin").post(signIn);

module.exports = router;
