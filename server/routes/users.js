const express = require("express");
const router = express.Router();
const passport = require("passport");

const { register, login, getUser } = require("../controllers/users");

router.post("/register", register);
router.post("/login", login);
router.get("/user", passport.authenticate("jwt", { session: false }), getUser);

module.exports = router;
