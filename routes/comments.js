const express = require("express");
const passport = require("passport");

const { create, update, remove } = require("../controllers/comments");

const router = express.Router();

router
  .route("/:postID")
  .post(passport.authenticate("jwt", { session: false }), create);

router
  .route("/:postID/:commentID")
  .put(passport.authenticate("jwt", { session: false }), update)
  .delete(passport.authenticate("jwt", { session: false }), remove);

module.exports = router;
