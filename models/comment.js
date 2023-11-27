import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        itemId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Item",
        },
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