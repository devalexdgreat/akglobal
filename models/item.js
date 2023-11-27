import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
    {
        tracking_id: Number,
        shipping_date: String,
        shipping_time: String,
        sender_name: String,
        sender_address: String,
        shipping_quantity: String,
        item_weight: String,
        delivery_city: String,
        destination_city: String,
        shipping_time_rec: String,
        delivery_time: String,
        receiver_name: String,
        receiver_address: String,
        comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;