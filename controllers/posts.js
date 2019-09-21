const Post = require("../models/post");

const getAll = async (req, res, next) => {
  try {
    const posts = await Post.find({})
      .populate("author")
      .populate("comments");

    res.json({ posts });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author")
      .populate("comments");
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const post = new Post({ ...req.body, author: req.user._id });
    await post.save();
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const post = Post.findByIdAndDelete(req.params.id);
    res.json({ post });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};
