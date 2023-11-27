"use client";
import Image from "next/image";
import refIcon from "@/public/ref.png";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";

export default function CreateId() {
    const [tracking_id, SetTracking_id] = useState(0);
    const [shipping_date, SetShipping_date] = useState("");
    const [shipping_time, SetShipping_time] = useState("");
    const [sender_name, SetSender_name] = useState("");
    const [sender_address, SetSender_address] = useState("");
    const [shipping_quantity, SetShipping_quantity] = useState("");
    const [item_weight, SetItem_weight] = useState("");
    const [delivery_city, SetDelivery_city] = useState("");
    const [destination_city, SetDestination_city] = useState("");
    const [shipping_time_rec, SetShipping_time_rec] = useState("");
    const [delivery_time, SetDelivery_time] = useState("");
    const [receiver_name, SetReceiver_name] = useState("");
    const [receiver_address, SetReceiver_address] = useState("");

    // const [commentData, SetCommentData] = useState("");

    // const [ddate, SetDdate] = useState("");
    // const [dtime, SetDtime] = useState("");
    // const [dquote, SetDquote] = useState("");
    // const [dcomment, SetDcomment] = useState("");


    const router = useRouter();

    const getRandomNumber = () => {
        let min = 10000000000;
        let max = 99999999999;
        SetTracking_id(Math.round(Math.random() * (max - min) + min))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!tracking_id || !shipping_date || !shipping_time || !sender_name || !sender_address || !shipping_quantity
            || !item_weight || !delivery_city || !destination_city || !shipping_time_rec || !delivery_time 
            || !receiver_name || !receiver_address ) {
            alert('This fields are required!');
            return;
        }

        try {
            const res = await fetch('api/items', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ tracking_id, shipping_date, shipping_time, sender_name, 
                    sender_address, shipping_quantity, item_weight, delivery_city, destination_city,
                    shipping_time_rec, delivery_time, receiver_name, receiver_address, }),
            });

            if (res.ok) {
                const data = await res.json();
                console.log("Items Created: ", data);
                router.push('/admin');
                router.refresh();
            } else {
                throw new Error('Failed to create an Item!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-11/12 mx-auto">
                <div className="my-12">
                    <h1 className="text-2xl md:text-2xl font-medium">Create New Id for item</h1>
                </div>
                <div className="pb-48 w-full">
                    <span className="font-bold text-xl">Sender Info</span>


                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex gap-5">
                                <div className='flex flex-col gap-1'>
                                    <label>Tracking ID:</label>
                                    <div className="flex items-center border border-black rounded-lg pe-2">
                                        <input type='text' value={tracking_id} readOnly
                                        className='w-full p-3 rounded-lg new-inp'/>
                                        <div onClick={() => getRandomNumber()} className="h-9 w-10 bg-blue-500 
                                        hover:bg-blue-600 flex items-center 
                                        justify-center rounded-full p-1">
                                            <Image src={refIcon} className="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Date:</label>
                                    <input 
                                    onChange={(e) => SetShipping_date(e.target.value)}
                                    value={shipping_date}
                                    type='date' placeholder='Enter Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time:</label>
                                    <input 
                                    onChange={(e) => SetShipping_time(e.target.value)}
                                    value={shipping_time}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Contact Name:</label>
                                    <input 
                                    onChange={(e) => SetSender_name(e.target.value)}
                                    value={sender_name}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div> 
                        </div>
                        

                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Sender Contact Address:</label>
                                <input 
                                onChange={(e) => SetSender_address(e.target.value)}
                                value={sender_address}
                                type='text' placeholder='Enter Destination address' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Shipping Quantity</label>
                                <input 
                                onChange={(e) => SetShipping_quantity(e.target.value)}
                                value={shipping_quantity}
                                type='text' placeholder='Enter Shipping Quantity' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Total Weight</label>
                                <input 
                                onChange={(e) => SetItem_weight(e.target.value)}
                                value={item_weight}
                                type='text' placeholder='Enter Item Weight' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>
                        <span className="font-bold text-xl">Recipient Info</span>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className='flex flex-col gap-1'>
                                    <label>Delivery City:</label>
                                    <input 
                                    onChange={(e) => SetDelivery_city(e.target.value)}
                                    value={delivery_city}
                                    type='text' placeholder='Enter Item name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Destination City:</label>
                                    <input 
                                    onChange={(e) => SetDestination_city(e.target.value)}
                                    value={destination_city}
                                    type='text' placeholder='Enter Item description' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time</label>
                                    <input 
                                    onChange={(e) => SetShipping_time_rec(e.target.value)}
                                    value={shipping_time_rec}
                                    type='text' placeholder='Enter address shipped from' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Delivery Time:</label>
                                    <input 
                                    onChange={(e) => SetDelivery_time(e.target.value)}
                                    value={delivery_time}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div> 
                        </div>
                        
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Recipient Contact Name:</label>
                                    <input 
                                    onChange={(e) => SetReceiver_name(e.target.value)}
                                    value={receiver_name}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Recipient Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetReceiver_address(e.target.value)}
                                    value={receiver_address}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div> 
                            </div> 
                        </div>
                        
                        
                        
                        <div className='flex'>
                            <input type="submit" value="Create" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}