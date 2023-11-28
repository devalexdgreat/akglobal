"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CommentForm({ useId }) {

    const router = useRouter();
    const itemid = useId;
    const [ddate, SetDdate] = useState("");
    const [dtime, SetDtime] = useState("");
    const [dquote, SetDquote] = useState("");
    const [dcomment, SetDcomment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!ddate || !dtime || !dquote || !dcomment) {
            alert('This fields are required!');
            return;
        }

        try {
            const res = await fetch('/api/comments', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ itemid, ddate, dtime, dquote, dcomment }),
            });


            if (res.ok) {
                const data = await res.json();
                console.log("Comment Created: ", data);
                router.push(`/viewid/${itemid}`);
                router.refresh();
            } else {
                throw new Error('Failed to create a Comment!');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="pb-48 w-full">
        <p>I am {useId}</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Log Date:</label>
                                <input 
                                onChange={(e) => SetDdate(e.target.value)}
                                value={ddate}
                                type='text' placeholder='Enter Log date' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Time</label>
                                <input 
                                onChange={(e) => SetDtime(e.target.value)}
                                value={dtime}
                                type='text' placeholder='Enter Log Time' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Quote</label>
                                <input 
                                onChange={(e) => SetDquote(e.target.value)}
                                value={dquote}
                                type='text' placeholder='Enter Log Quote' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Comment</label>
                                <input 
                                onChange={(e) => SetDcomment(e.target.value)}
                                value={dcomment}
                                type='text' placeholder='Enter Log Comment' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className='flex'>
                            <input type="submit" value="Create" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                            font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
    );
}