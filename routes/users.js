const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/register", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (user) {
      res.status(400).send({ success: false, message: "User already exists" });
    } else {
      var newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      });
      newUser.save(err => {
        if (err) throw err;
        else {
          res.json({
            success: true,
            message: "Successfully registered, you can login now."
          });
        }
      });
    }
  });
});

// AUTHENTICATE USER

router.post("/authenticate", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(400).send({ success: false, message: "Error found: " + err });
    }
    if (!user) {
      res.status(400).send({ success: false, message: "User not found." });
    } else if (user && user.isValidPassword(req.body.password)) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "24h"
      });
      res.json({ token, message: "You have successfully logged in." });
    } else {
      res
        .status(400)
        .send({ success: false, message: "Password did not match." });
    }
  });
});

// USER PROFILE

router.get("/users/:id", passport.authenticate("jwt"), (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .exec((err, user) => {
      if (err) throw err;
      else {
        res.json(user);
      }
    });
});

module.exports = router;
