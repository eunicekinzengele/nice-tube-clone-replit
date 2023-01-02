const mongoose = require ('mongoose');

const commentModelSchema=mongoose.Schema(
    {
        commentaire: {type: String, required : true},
        videoid: {type: String, required : true},
        userid: {type: String, required : true},
        parentComment: { type: String, default: null },
    },
    {
        commentedTime: true
    }
);

module.exports= mongoose.model('Comment', commentModelSchema);
