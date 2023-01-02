const mongoose = require ('mongoose');

const commentSchema=mongoose.Schema(
    {
        commentaire: string,
        videoid: String,
        userid: string
    }
)

module.exports= mongoose.model('Comment', commentSchema);
