const mongoose = require ('mongoose');

const likesModelSchema = mongoose.Schema({
    numberLikes: { type: String, require: true },
  });
  const dislikesModelSchema = mongoose.Schema({
    numbersDislikes: { type: Number, require: true },
  });
  const subCommentModelSchema = mongoose.Schema(
    {
      commentaire: { type: String, require: true },
      userId: { type: String, require: true },
      likes: [likesModelSchema],
      dislikes: [dislikesModelSchema],
    },
    {
      timestamps: true,
    }
  );


const commentModelSchema=mongoose.Schema(
    {
        commentaire: {type: String, required : true},
        videoId: {type: String, required : true},
        userId: {type: String, required : true},
        subCommentModelSchema:  [subCommentModelSchema],
        likesModelSchema: [likesModelSchema],
        dislikesModelSchema: [dislikesModelSchema]
    },
    {
        commentedTime: true
    }
);



module.exports= mongoose.model('Comment', commentModelSchema);
