import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;

    const { newTracking_id: tracking_id, newShipping_date: shipping_date, newShipping_time: shipping_time,
    newSender_name: sender_name, newSender_address: sender_address, newShipping_quantity: shipping_quantity,
    newItem_weight: item_weight, newDelivery_city: delivery_city, newDestination_city: destination_city, 
    newShipping_time_rec: shipping_time_rec, newDelivery_time: delivery_time, newReceiver_name: receiver_name, 
    newReceiver_address: receiver_address } = await request.json();

    await connectMongoDB();

    await Item.findByIdAndUpdate(id, { tracking_id, shipping_date, shipping_time, sender_name, 
        sender_address, shipping_quantity, item_weight, delivery_city, destination_city, 
        shipping_time_rec, delivery_time, receiver_name, receiver_address });

    return NextResponse.json({ message: "Item Info Updated!" }, { status: 200 });
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectMongoDB();
    const item = await Item.findOne({_id: id});
    return NextResponse.json({ item }, { status: 200 });
}