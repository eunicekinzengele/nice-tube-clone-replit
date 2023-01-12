const { NewLineKind } = require("typescript");
const Comment = require("../models/CommentModel");

exports.createAComment = (data, success, over) => { 
  console.log(data)
  const comments = new Comment({...data});
  comments
    .save()
    .then((comment) => success(comment))
    .catch((error) => over(error));
};




