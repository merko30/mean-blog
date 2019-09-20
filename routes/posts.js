const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  getAll,
  getOne,
  create,
  update,
  remove
} = require("../controllers/posts");

router
  .route("/")
  .get(getAll)
  .post(passport.authenticate("jwt", { session: false }), create);

router
  .route("/:id")
  .get(getOne)
  .put(passport.authenticate("jwt", { session: false }), update)
  .delete(passport.authenticate("jwt", { session: false }), remove);

module.exports = router;
