const cors = require("cors");
const express = require("express");
const passport = require("passport");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(passport.initialize());
  require("./passport")(passport);
};
