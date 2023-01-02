const { NewLineKind } = require("typescript");
const { default: Comment } = require("../../src/Components/Comment");
const Comment = require("../models/CommentModel");

exports.createAComment = (req, res, next) => {
  const comment = new Comment({
    ...req.body,
  });
  comment
    .save()
    .then(() => res.status(201).json({ message: "new comment created" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAComment = (req, res, next) => {
  Comment.find()
    .then(() => res.status(201).json({ message: "comments found" }))
    .catch((error) => res.status(400).json({ error}));
};
