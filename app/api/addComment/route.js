import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/item";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {track_id, ddate, dtime, dquote, dcomment} = await request.json();

    await connectMongoDB();

    const item = await Item.findOne({ track_id });
    console.log(item);

    if(!item) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    Comment.create({
        itemId: item._id,
        ddate,
        dtime,
        dquote,
        dcomment
    });
    return NextResponse.json({ message: "Comment Created" }, { status: 201 });
}