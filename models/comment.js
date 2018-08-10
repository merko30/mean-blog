const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = require("./user");

commentSchema = new schema(
  {
    comment: String,
    postID: String,
    author: { type: schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

// Duplicate the ID field.
commentSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
commentSchema.set("toJSON", {
  virtuals: true
});

const Comment = (module.exports = mongoose.model("Comment", commentSchema));
