const action = require("../action/Action");
const { NewLineKind } = require("typescript");
const Comment = require("../models/CommentModel");

exports.createAComment = (req, res, next) => {
  action.createAComment({
    ...req.body,
  }),
    (data) => {
      res.status(201).json({ message: "new comment created" });
    },
    (error) => {
      res.status(400).json({ error });
    };
};


exports.getAComment = (req, res, next) => {
  Comment.find()
    .then((commentaires) => res.status(201).json({ message: "comments found" }))
    .catch((error) => res.status(400).json({ error}));
};













exports.findAComment = (req, res, next) => {
  Comment.find()
    .then(() => res.status(201).json({ message: "comments found" }))
    .catch((error) => res.status(400).json({ error }));
};
