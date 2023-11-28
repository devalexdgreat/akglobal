"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditComForm({ id, itemid, ddate, dtime, dquote, dcomment }) {

    const [newItemid, SetItemid] = useState(itemid);
    const [newDdate, SetNewDdate] = useState(ddate);
    const [newDtime, SetNewDtime] = useState(dtime);
    const [newDquote, SetNewDquote] = useState(dquote);
    const [newDcomment, SetNewDcomment] = useState(dcomment);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios
                .put(`/api/comments/${id}`, {
                    newItemid, newDdate, newDtime, newDquote, newDcomment
                })
                .then(function (response) {
                console.log(response);
                router.push(`/viewid/${itemid}`);
                router.refresh();
                });

            
            
            if (!res.ok) {
                throw new Error("Failed to Update Comments");
            }

            router.push(`/viewid/${itemid}`);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="pb-48 w-full">
        
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Log Date:</label>
                                <input 
                                onChange={(e) => SetNewDdate(e.target.value)}
                                value={newDdate}
                                type='text' placeholder='Enter Log date' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Time</label>
                                <input 
                                onChange={(e) => SetNewDtime(e.target.value)}
                                value={newDtime}
                                type='text' placeholder='Enter Log Time' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Quote</label>
                                <input 
                                onChange={(e) => SetNewDquote(e.target.value)}
                                value={newDquote}
                                type='text' placeholder='Enter Log Quote' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Log Comment</label>
                                <input 
                                onChange={(e) => SetNewDcomment(e.target.value)}
                                value={newDcomment}
                                type='text' placeholder='Enter Log Comment' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <div className='flex'>
                            <input type="submit" value="Edit" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                            font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
    );
}