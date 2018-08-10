const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../models/post");
const Comment = require("../models/comment");

router.get("/posts", (req, res) => {
  Post.find({})
    .populate("author")
    .populate("comments")
    .exec((err, post) => {
      if (err) throw err;
      else {
        res.json(post);
      }
    });
});

router.get("/posts/:id", (req, res) => {
  Post.findById(req.params.id)
    .populate("author")
    .exec((err, post) => {
      if (err) throw err;
      else {
        res.json(post);
      }
    });
});

router.post("/posts", passport.authenticate("jwt"), (req, res) => {
  var newPost = new Post({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
    author: req.user._id
  });
  newPost.save(err => {
    if (err) res.json({ message: "Error occured " + err, success: false });
    else {
      res.json({ message: "Post created.", success: true });
    }
  });
});

router.put(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req);
    Post.findOne({ _id: req.params.id }, (err, post) => {
      if (err) throw err;
      if (post.author.equals(req.user._id)) {
        post.title = req.body.title;
        post.body = req.body.body;
        post.image = req.body.image;

        post.save((err, updatedPost) => {
          if (err) throw err;
          else {
            res.json({
              message: "You have successfully updated your post",
              success: true
            });
          }
        });
      } else {
        res
          .status(401)
          .json({ success: false, message: "You are not allowed to do this." });
      }
    });
  }
);

/*
REMOVE POST

router.delete("/posts/:id", passport.authenticate("jwt"), (req, res) => {
  Post.findByIdAndRemove(req.params._id, (err, msg) => {
    if (err) {
      res.send({ success: false, message: "Error " + err });
    } else {
      res.send({ success: true, message: "Post has been deleted." });
    }
  });
});

*/

//COMMENTS

router.get("/comments", (req, res) => {
  Comment.find({})
    .sort([["created_at", -1]])
    .populate("author")
    .exec((err, comments) => {
      if (err) throw err;
      else {
        res.json(comments);
      }
    });
});

//New comment
router.post(
  "/posts/:_id/comments",
  passport.authenticate("jwt"),
  (req, res) => {
    var newComment = new Comment({
      comment: req.body.comment,
      postID: req.params._id,
      author: req.user._id
    });
    newComment.save((err, comment) => {
      if (err) {
        res.status(400).json({ success: false, message: "Error" + err });
      } else {
        res.json(c);
      }
    });
  }
);

/*
EDIT COMMENT 

router.put('/posts/:id/comments/:commentId', passport.authenticate('jwt'), (req, res) => {
    Comment.findOne({ _id: req.params.commentId }, (err, comment) => {
        if (err) throw err;
        if (comment.author.equals(req.user._id)) {
            comment.comment = req.body.comment

            comment.save((err, updatedComment) => {
                if (err) throw err;
                else {
                    res.json({ success: true, message: "Comment updated" });
                }
            });
        }
    });
});

*/

/*
COMMENT DELETE

router.delete(
  "/posts/:id/comments/:commentId",
  passport.authenticate("jwt"),
  (req, res) => {
    Comment.findOne({ _id: req.params.commentId }, (err, comment) => {
      if (err) throw err;
      if (comment.author.equals(req.user._id)) {
        comment.remove(err => {
          if (err) throw err;
          res.json({ success: true, message: "Comment deleted." });
        });
      } else {
        res.status(401).json({ message: "Not allowed", success: false });
      }
    });
  }
);

*/

module.exports = router;
