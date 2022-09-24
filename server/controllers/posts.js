const Post = require("../models/post");

const getAll = async (req, res, next) => {
  const perPage = 9;
  const page = req.query.page || 1;
  try {
    const posts = await Post.find({})
      .populate("author", "-password")
      .skip(perPage * page - perPage)
      .limit(perPage);
    const countAll = await Post.countDocuments({});
    res.json({
      posts,
      numberOfPages: Math.ceil(countAll / perPage),
      perPage,
      currentPage: page
    });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)

      .populate("author", "-password")
      .populate({
        path: "comments",
        populate: { path: "author", model: "User", select: "-password" }
      });
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
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
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
