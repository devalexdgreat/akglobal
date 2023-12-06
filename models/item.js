import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema(
    {
        tracking_id: Number,
        origin_city: String,
        city_collection: String,
        shipping_date: String,
        shipping_time: String,
        sender_name: String,
        sender_address: String,
        shipping_quantity: String,
        item_weight: String,
        phn: String,
        email: String,
        paymode: String,
        service_type: String,
        company: String,
        ship_mode: String,
        desc: String,
        length: String,
        width: String,
        height: String,
        weight_vol: String,
        dec_value: String,
        price_lb: String,
        discount: String,
        insurance: String,
        tariff: String,
        tax: String,
        dec_tax: String,
        re_exp: String,
        c_fee: String,
        delivery_city: String,
        destination_city: String,
        shipping_time_rec: String,
        delivery_time: String,
        receiver_name: String,
        receiver_address: String
    },
    {
        timestamps: true,
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;