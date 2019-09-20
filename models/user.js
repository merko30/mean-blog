const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const schema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true }
});

schema.pre("save", async function(next) {
  var user = this;
  if (!this.isModified("password")) {
    return next();
  }
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

schema.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", schema, "users");
