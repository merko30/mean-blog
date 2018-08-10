const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = require("./user");
const Comment = require("./comment");

postSchema = new schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: schema.Types.ObjectId, ref: "User" },
    image: String,
    likes: Number
  },
  { timestamps: true }
);

const Post = (module.exports = mongoose.model("post", postSchema, "posts"));
