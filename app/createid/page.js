"use client";
import Image from "next/image";
import refIcon from "@/public/ref.png";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";

export default function CreateId() {
    const [tracking_id, SetTracking_id] = useState(0);
    const [origin_city, SetOrigin_city] = useState("");
    const [city_collection, SetCity_collection] = useState("");
    const [shipping_date, SetShipping_date] = useState("");
    const [shipping_time, SetShipping_time] = useState("");
    const [sender_name, SetSender_name] = useState("");
    const [sender_address, SetSender_address] = useState("");
    const [shipping_quantity, SetShipping_quantity] = useState("");
    const [item_weight, SetItem_weight] = useState("");
    const [phn, SetPhn] = useState("");
    const [email, SetEmail] = useState("");
    const [paymode, SetPaymode] = useState("");
    const [service_type, SetService_type] = useState("");
    const [company, SetCompany] = useState("");
    const [ship_mode, SetShip_mode] = useState("");
    const [desc, SetDesc] = useState("");
    const [length, SetLength] = useState("");
    const [width, SetWidth] = useState("");
    const [height, SetHeight] = useState("");
    const [weight_vol, SetWeight_vol] = useState("");
    const [dec_value, SetDec_value] = useState("");
    const [price_lb, SetPrice_lb] = useState("");
    const [discount, SetDiscount] = useState("");
    const [insurance, SetInsurance] = useState("");
    const [tariff, SetTariff] = useState("");
    const [tax, SetTax] = useState("");
    const [dec_tax, SetDec_tax] = useState("");
    const [re_exp, SetRe_exp] = useState("");
    const [c_fee, SetC_fee] = useState("");
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

        if(!tracking_id || !origin_city || !city_collection || !shipping_date || !shipping_time || !sender_name || !sender_address || !shipping_quantity
            || !item_weight || !phn || !email || !paymode || !service_type || !company || !ship_mode || !desc || !length || !width || !height || !weight_vol 
            || !price_lb || !discount || !insurance || !tariff || !tax || !dec_tax || !re_exp || !c_fee || !delivery_city || !destination_city 
            || !shipping_time_rec || !delivery_time || !receiver_name || !receiver_address ) {
            alert('This fields are required!');
            return;
        }

        try {
            const res = await fetch('api/items', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ tracking_id, origin_city, city_collection, shipping_date, shipping_time, sender_name, 
                    sender_address, shipping_quantity, item_weight, phn, email, paymode, service_type, company, 
                    ship_mode, desc, length, width, height, weight_vol, dec_value, price_lb, discount, insurance, 
                    tariff, tax, dec_tax, re_exp, c_fee, delivery_city, destination_city,
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


                    <form id="form" name="form" onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
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
                                    type='date' placeholder='Enter Shipping Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Origin City:</label>
                                    <input 
                                    onChange={(e) => SetOrigin_city(e.target.value)}
                                    value={origin_city}
                                    type='text' placeholder='Enter Origin City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>City Collection:</label>
                                    <input 
                                    onChange={(e) => SetCity_collection(e.target.value)}
                                    value={city_collection}
                                    type='text' placeholder='Enter City Collection' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time:</label>
                                    <input 
                                    onChange={(e) => SetShipping_time(e.target.value)}
                                    value={shipping_time}
                                    type='text' placeholder='Enter Shipping Time' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className="flex gap-5 flex-col md:flex-row">
                                
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Contact Name:</label>
                                    <input 
                                    onChange={(e) => SetSender_name(e.target.value)}
                                    value={sender_name}
                                    type='text' placeholder='Enter Sender Name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetSender_address(e.target.value)}
                                    value={sender_address}
                                    type='text' placeholder='Enter Sender address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Phone Number:</label>
                                    <input 
                                    onChange={(e) => SetPhn(e.target.value)}
                                    value={phn}
                                    type='number' placeholder='Enter Sender Phone' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Email Address:</label>
                                    <input 
                                    onChange={(e) => SetEmail(e.target.value)}
                                    value={email}
                                    type='email' placeholder='Enter Sender Email' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>

                        </div>

                        <span className="font-bold text-xl">Item Info</span>

                        <div className="flex gap-5 flex-col md:flex-row">    
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className='flex flex-col gap-1'>
                                    <label>Item Description</label>
                                    <input 
                                    onChange={(e) => SetDesc(e.target.value)}
                                    value={desc}
                                    type='text' placeholder='Enter Description' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Item Length</label>
                                    <input 
                                    onChange={(e) => SetLength(e.target.value)}
                                    value={length}
                                    type='number' placeholder='Enter Item Length' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Item Width</label>
                                    <input 
                                    onChange={(e) => SetWidth(e.target.value)}
                                    value={width}
                                    type='number' placeholder='Enter Item Width' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Quantity</label>
                                    <input 
                                    onChange={(e) => SetShipping_quantity(e.target.value)}
                                    value={shipping_quantity}
                                    type='number' placeholder='Enter Shipping Quantity' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Total Weight</label>
                                    <input 
                                    onChange={(e) => SetItem_weight(e.target.value)}
                                    value={item_weight}
                                    type='number' placeholder='Enter Item Weight' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Total Weight (Vol)</label>
                                <input 
                                onChange={(e) => SetWeight_vol(e.target.value)}
                                value={weight_vol}
                                type='number' placeholder='Enter Item Weight Vol.' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Item Height</label>
                                <input 
                                onChange={(e) => SetHeight(e.target.value)}
                                value={height}
                                type='number' placeholder='Enter Item Height' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Declared Value</label>
                                <input 
                                onChange={(e) => SetDec_value(e.target.value)}
                                value={dec_value}
                                type='number' placeholder='Enter Declared value' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <span className="font-bold text-xl">Payment Details</span>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Pay Mode</label>
                                <input 
                                onChange={(e) => SetPaymode(e.target.value)}
                                value={paymode}
                                type='text' placeholder='Enter Pay mode' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Service Shipping</label>
                                <input 
                                onChange={(e) => SetService_type(e.target.value)}
                                value={service_type}
                                type='text' placeholder='Enter Service type' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Courier Company</label>
                                <input 
                                onChange={(e) => SetCompany(e.target.value)}
                                value={company}
                                type='text' placeholder='Enter Courier Company' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Shipping Mode</label>
                                <input 
                                onChange={(e) => SetShip_mode(e.target.value)}
                                value={ship_mode}
                                type='text' placeholder='Enter Shipping Mode' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Price Lb</label>
                                <input 
                                onChange={(e) => SetPrice_lb(e.target.value)}
                                value={price_lb}
                                type='number' placeholder='Enter Price Lb' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Discount</label>
                                <input 
                                onChange={(e) => SetDiscount(e.target.value)}
                                value={discount}
                                type='number' placeholder='Enter Discount' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Insurance</label>
                                <input 
                                onChange={(e) => SetInsurance(e.target.value)}
                                value={insurance}
                                type='number' placeholder='Enter Insurance' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Customs Tariffs</label>
                                <input 
                                onChange={(e) => SetTariff(e.target.value)}
                                value={tariff}
                                type='number' placeholder='Enter Customs Tariffs' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Tax</label>
                                <input 
                                onChange={(e) => SetTax(e.target.value)}
                                value={tax}
                                type='number' placeholder='Enter Tax' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Declared Tax</label>
                                <input 
                                onChange={(e) => SetDec_tax(e.target.value)}
                                value={dec_tax}
                                type='number' placeholder='Enter Declared Tax' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Re Expedition</label>
                                <input 
                                onChange={(e) => SetRe_exp(e.target.value)}
                                value={re_exp}
                                type='number' placeholder='Enter Re Expedition' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Courier Fee</label>
                                <input 
                                onChange={(e) => SetC_fee(e.target.value)}
                                value={c_fee}
                                type='number' placeholder='Enter Courier Fee' 
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
                                    type='text' placeholder='Enter Delivery City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Destination City:</label>
                                    <input 
                                    onChange={(e) => SetDestination_city(e.target.value)}
                                    value={destination_city}
                                    type='text' placeholder='Enter Destination City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Date</label>
                                    <input 
                                    onChange={(e) => SetShipping_time_rec(e.target.value)}
                                    value={shipping_time_rec}
                                    type='text' placeholder='Enter Shipping Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Delivery Date:</label>
                                    <input 
                                    onChange={(e) => SetDelivery_time(e.target.value)}
                                    value={delivery_time}
                                    type='text' placeholder='Enter Delivery Date' 
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
                                    type='text' placeholder='Enter Recipient Name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Recipient Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetReceiver_address(e.target.value)}
                                    value={receiver_address}
                                    type='text' placeholder='Enter Recipient address' 
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