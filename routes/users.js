const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/main");

const User = require("../models/user");

router.post("/register", (req, res, next) => {
  User.findOne(
    { $or: [{ username: req.body.username }, { email: req.body.email }] },
    (err, user) => {
      if (err) throw err;
      if (user) {
        res
          .status(400)
          .send({ success: false, message: "User already exists" });
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
    }
  );
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
      const token = jwt.sign({ id: user._id }, config.secret, {
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
  User.findOne({ _id: req.params.id})
    .select("-password")
    .exec((err, user) => {
      if (err) throw err;
      else {
        res.json(user);
      }
    });
});

// UPDATE USER

router.put("/users/:id", (req, res) => {
  var password = req.body.password;
  hashedpassword = bcrypt.hashSync(password, 10);

  User.findByIdAndUpdate(
    req.params._id,
    {
      $set: {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: hashedpassword,
        avatar: req.body.avatar
      }
    },
    (err, updatedUser) => {
      if (err) {
        res.send({ success: false, message: "Error found " + err });
      }
      res.json({ success: true, message: "Your info has been updated." });
    }
  );
});

// DELETE USER

router.delete("/users/:id", (req, res) => {
  User.findByIdAndRemove(req.params._id, (err, deletedUser) => {
    if (err) {
      throw err;
    }
    res.json({ success: true, message: "Your account is deleted." });
  });
});

module.exports = router;
