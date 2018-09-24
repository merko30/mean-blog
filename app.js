const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

// MongoDB
mongoose
  .connect(
    process.env.DB,
    { useMongoClient: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport

require("./config/passport")(passport);
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

//API
const users = require("./routes/users");
app.use("/api", users);

const posts = require("./routes/posts");
app.use("/api", posts);

port = 3000 || process.env.port;

app.listen(port, () => {
  console.log("Server started on port " + port);
});
