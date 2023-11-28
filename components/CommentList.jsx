"use client";
import { useEffect, useState } from "react";

export default function CommentList({queryData, comData}) {
    const matchedData = comData.filter(obj => obj.itemid === queryData);
    console.log("this is comData: ", comData);
    console.log("this is matched data: ", matchedData);
    return (
        <>
            {matchedData.map((c) => (
                <div key={c._id} className="p-4 border bg-gray-200 rounded-lg">
                    <h1><span className="font-bold">Log ID: </span>{c.itemid}</h1>
                    <h1><span className="font-bold">Log Date: </span>{c.ddate}</h1>
                    <h1><span className="font-bold">Log Time: </span>{c.dtime}</h1>
                    <h1><span className="font-bold">Log Quote: </span>{c.dquote}</h1>
                    <h1><span className="font-bold">Log Comment: </span>{c.dcomment}</h1>
                </div>
            ))}
        </>
    );
}