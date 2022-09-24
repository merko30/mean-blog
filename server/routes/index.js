const express = require("express");

const router = express.Router();

const posts = require("./posts");
const users = require("./users");
const comments = require("./comments");

router.use("/posts", posts);
router.use("/auth", users);
router.use("/comments", comments);

module.exports = router;
