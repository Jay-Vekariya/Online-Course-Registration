const express = require("express");
const router = express.Router()
const authconstroller = require("../Controllers/auth-controller");
const signupSchema = require("../Validators/auth-validators")
const validate = require("../Middlewares/validate-middleware");

router.route("/").get(authconstroller.home);
router.route("/register").post( validate(signupSchema), authconstroller.register);
router.route("/signin").post(authconstroller.signin);
    
module.exports = router;