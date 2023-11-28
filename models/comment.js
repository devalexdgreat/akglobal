import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        itemid: String,
        ddate: String,
        dtime: String,
        dquote: String,
        dcomment: String
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;