const mongoose = require ('mongoose');

const commentSchema=mongoose.Schema(
    {
        commentaire: {type: String, required : true},
        videoid: {type: String, required : true},
        userid: {type: String, required : true},
    }
)

module.exports= mongoose.model('Comment', commentSchema);
