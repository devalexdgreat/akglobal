"use client";

import Image from "next/image";
import refIcon from "@/public/ref.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditTopicForm({ id, tracking_id, origin_city, city_collection, shipping_date, shipping_time, sender_name, 
    sender_address, shipping_quantity, item_weight, delivery_city, destination_city, 
    shipping_time_rec, delivery_time, receiver_name, receiver_address }) {
    
    const [newTracking_id, SetNewTracking_id] = useState(tracking_id);
    const [newOrigin_city, SetNewOrigin_city] = useState(origin_city);
    const [newCity_collection, SetNewCity_collection] = useState(city_collection);
    const [newShipping_date, SetNewShipping_date] = useState(shipping_date);
    const [newShipping_time, SetNewShipping_time] = useState(shipping_time);
    const [newSender_name, SetNewSender_name] = useState(sender_name);
    const [newSender_address, SetNewSender_address] = useState(sender_address);
    const [newShipping_quantity, SetNewShipping_quantity] = useState(shipping_quantity);
    const [newItem_weight, SetNewItem_weight] = useState(item_weight);
    const [newDelivery_city, SetNewDelivery_city] = useState(delivery_city);
    const [newDestination_city, SetNewDestination_city] = useState(destination_city);
    const [newShipping_time_rec, SetNewShipping_time_rec] = useState(shipping_time_rec);
    const [newDelivery_time, SetNewDelivery_time] = useState(delivery_time);
    const [newReceiver_name, SetNewReceiver_name] = useState(receiver_name);
    const [newReceiver_address, SetNewReceiver_address] = useState(receiver_address);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios
                .put(`/api/items/${id}`, {
                    newTracking_id, newOrigin_city, newCity_collection, newShipping_date, newShipping_time, newSender_name, newSender_address, 
                    newShipping_quantity, newItem_weight, newDelivery_city, newDestination_city, newShipping_time_rec, 
                    newDelivery_time, newReceiver_name, newReceiver_address
                })
                .then(function (response) {
                console.log(response);
                router.push("/admin");
                router.refresh();
                });

            
            
            if (!res.ok) {
                throw new Error("Failed to Update Items");
            }

            router.push('/admin');
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="pb-48 w-full">
                    <span className="font-bold text-xl">Sender Info</span>


                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex gap-5">
                                <div className='flex flex-col gap-1'>
                                    <label>Tracking ID:</label>
                                    <div className="flex items-center border border-black rounded-lg pe-2">
                                        <input type='text' value={newTracking_id} readOnly
                                        className='w-full p-3 rounded-lg new-inp'/>
                                        <div className="h-9 w-10 bg-blue-500 hover:bg-blue-600 flex items-center 
                                        justify-center rounded-full p-1">
                                            <Image src={refIcon} className="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Date:</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_date(e.target.value)}
                                    value={newShipping_date}
                                    type='date' placeholder='Enter Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Origin City:</label>
                                    <input 
                                    onChange={(e) => SetNewOrigin_city(e.target.value)}
                                    value={newOrigin_city}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>City Collection:</label>
                                    <input 
                                    onChange={(e) => SetNewCity_collection(e.target.value)}
                                    value={newCity_collection}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div> 
                        </div>
                        

                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time:</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_time(e.target.value)}
                                    value={newShipping_time}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Contact Name:</label>
                                    <input 
                                    onChange={(e) => SetNewSender_name(e.target.value)}
                                    value={newSender_name}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div> 
                            <div className='flex flex-col gap-1'>
                                <label>Sender Contact Address:</label>
                                <input 
                                onChange={(e) => SetNewSender_address(e.target.value)}
                                value={newSender_address}
                                type='text' placeholder='Enter Destination address' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Shipping Quantity</label>
                                <input 
                                onChange={(e) => SetNewShipping_quantity(e.target.value)}
                                value={newShipping_quantity}
                                type='text' placeholder='Enter Shipping Quantity' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Total Weight</label>
                                <input 
                                onChange={(e) => SetNewItem_weight(e.target.value)}
                                value={newItem_weight}
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
                                    onChange={(e) => SetNewDelivery_city(e.target.value)}
                                    value={newDelivery_city}
                                    type='text' placeholder='Enter Item name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Destination City:</label>
                                    <input 
                                    onChange={(e) => SetNewDestination_city(e.target.value)}
                                    value={newDestination_city}
                                    type='text' placeholder='Enter Item description' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_time_rec(e.target.value)}
                                    value={newShipping_time_rec}
                                    type='text' placeholder='Enter address shipped from' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Delivery Time:</label>
                                    <input 
                                    onChange={(e) => SetNewDelivery_time(e.target.value)}
                                    value={newDelivery_time}
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
                                    onChange={(e) => SetNewReceiver_name(e.target.value)}
                                    value={newReceiver_name}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Recipient Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetNewReceiver_address(e.target.value)}
                                    value={newReceiver_address}
                                    type='text' placeholder='Enter Destination address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div> 
                            </div> 
                        </div>
                        
                        
                        
                        <div className='flex'>
                            <input type="submit" value="Update" 
                            className='px-16 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold w-full md:w-2/12' />
                        </div>
                    </form>
                </div>
    );
}