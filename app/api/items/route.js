import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {tracking_id, shipping_date, shipping_time, sender_name, 
        sender_address, shipping_quantity, item_weight, delivery_city, destination_city, 
        shipping_time_rec, delivery_time, receiver_name, receiver_address, } = await request.json();

    await connectMongoDB();
    const itemCreated = await Item.create({tracking_id, shipping_date, shipping_time, sender_name, 
        sender_address, shipping_quantity, item_weight, delivery_city, destination_city, 
        shipping_time_rec, delivery_time, receiver_name, receiver_address, });
    return NextResponse.json({ message: "Item Created" }, { status: 201 }, { data: itemCreated });
}

export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json( items );
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Item.findByIdAndDelete(id);
    return NextResponse.json({ message: "Item Deleted" }, { status: 200 });
}
