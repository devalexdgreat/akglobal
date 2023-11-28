import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { itemid, ddate, dtime, dquote, dcomment } = await request.json();

    await connectMongoDB();
    const commentCreated = await Comment.create({ itemid, ddate, dtime, dquote, dcomment });
    return NextResponse.json({ message: "Comment Created" }, { status: 201 }, { data: commentCreated });
}

export async function GET() {
    await connectMongoDB();
    const comments = await Comment.find();
    return NextResponse.json( comments );
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Comment.findByIdAndDelete(id);
    return NextResponse.json({ message: "Log Deleted" }, { status: 200 });
}