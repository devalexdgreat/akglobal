"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import editIcon from '@/public/edit.png';
import DeleteLog from "./DeleteLog";

export default function CommentList({queryData, comData}) {
    const matchedData = comData.filter(obj => obj.itemid === queryData);
    console.log("this is comData: ", comData);
    console.log("this is matched data: ", matchedData);
    return (
        <>
            {matchedData.map((c) => (
                <div key={c._id} className="p-4 border bg-gray-200 rounded-lg relative 
            hover:bg-slate-100 admin-item group/item">
                    <div className="absolute flex md:invisible group-hover/item:visible 
                        md:bottom-[40%] md:left-[20%] w-40 gap-2 pt-2 items-center md:flex-col flex-col right-[-13%] top-0
                        justify-center spe-opt">
                        <Link href={`/editcom/${c._id}`} className="h-12 w-12 rounded-full flex items-center 
                        justify-center bg-blue-500 hover:bg-blue-600" title="Edit"> 
                            <Image src={editIcon} alt="edit" className="h-3/6 w-6/12" />
                        </Link>
                        <DeleteLog id={c._id} qData={queryData}/>
                    </div>
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