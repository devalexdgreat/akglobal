"use client";
import { useEffect, useState } from "react";

export default function CommentList({queryData}) {

    return (
        <>
            {comFound.map((c) => (
                <div key={c._id} className="p-4 border bg-gray-200 rounded-lg">
                    <h1><span className="font-bold">Log ID: </span>{c.itemId}</h1>
                    <h1><span className="font-bold">Log Date: </span>{c.ddate}</h1>
                    <h1><span className="font-bold">Log Time: </span>{c.dtime}</h1>
                    <h1><span className="font-bold">Log Quote: </span>{c.dquote}</h1>
                    <h1><span className="font-bold">Log Comment: </span>{c.dcomment}</h1>
                </div>
            ))}
        </>
    );
}