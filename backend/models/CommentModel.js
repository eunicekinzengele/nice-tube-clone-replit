const mongoose = require ('mongoose');

const commentModelSchema=mongoose.Schema(
    {
        commentaire: {type: String, required : true},
        videoid: {type: String, required : true},
        userid: {type: String, required : true},
    }
)

module.exports= mongoose.model('Comment', commentModelSchema);
