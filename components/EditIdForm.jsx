"use client";

import Image from "next/image";
import refIcon from "@/public/ref.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EditTopicForm({ id, tracking_id, origin_city, city_collection, shipping_date, shipping_time, sender_name, 
    sender_address, shipping_quantity, item_weight, phn, email, paymode, service_type, company, 
    ship_mode, desc, length, width, height, weight_vol, dec_value, price_lb, discount, insurance, 
    tariff, tax, dec_tax, re_exp, c_fee, delivery_city, destination_city,
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
    const [newPhn, SetNewPhn] = useState(phn);
    const [newEmail, SetNewEmail] = useState(email);
    const [newPaymode, SetNewPaymode] = useState(paymode);
    const [newService_type, SetNewService_type] = useState(service_type);
    const [newCompany, SetNewCompany] = useState(company);
    const [newShip_mode, SetNewShip_mode] = useState(ship_mode);
    const [newDesc, SetNewDesc] = useState(desc);
    const [newLength, SetNewLength] = useState(length);
    const [newWidth, SetNewWidth] = useState(width);
    const [newHeight, SetNewHeight] = useState(height);
    const [newWeight_vol, SetNewWeight_vol] = useState(weight_vol);
    const [newDec_value, SetNewDec_value] = useState(dec_value);
    const [newPrice_lb, SetNewPrice_lb] = useState(price_lb);
    const [newDiscount, SetNewDiscount] = useState(discount);
    const [newInsurance, SetNewInsurance] = useState(insurance);
    const [newTariff, SetNewTariff] = useState(tariff);
    const [newTax, SetNewTax] = useState(tax);
    const [newDec_tax, SetNewDec_tax] = useState(dec_tax);
    const [newRe_exp, SetNewRe_exp] = useState(re_exp);
    const [newC_fee, SetNewC_fee] = useState(c_fee);
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
                    newShipping_quantity, newItem_weight, newPhn, newEmail, newPaymode, newService_type, newCompany, newShip_mode, newDesc, 
                    newLength, newWidth, newHeight, newWeight_vol, newDec_value, newPrice_lb, newDiscount, newInsurance, newTariff, newTax, 
                    newDec_tax, newRe_exp, newC_fee, newDelivery_city, newDestination_city, newShipping_time_rec, 
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


                    <form id="form" name="form" onSubmit={handleSubmit} className="flex flex-col gap-8 mt-4">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex gap-5">
                                <div className='flex flex-col gap-1'>
                                    <label>Tracking ID:</label>
                                    <div className="flex items-center border border-black rounded-lg pe-2">
                                        <input type='text' value={newTracking_id} readOnly
                                        className='w-full p-3 rounded-lg new-inp'/>
                                        <div className="h-9 w-10 bg-blue-500 
                                        hover:bg-blue-600 flex items-center 
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
                                    type='date' placeholder='Enter Shipping Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Origin City:</label>
                                    <input 
                                    onChange={(e) => SetNewOrigin_city(e.target.value)}
                                    value={newOrigin_city}
                                    type='text' placeholder='Enter Origin City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>City Collection:</label>
                                    <input 
                                    onChange={(e) => SetNewCity_collection(e.target.value)}
                                    value={newCity_collection}
                                    type='text' placeholder='Enter City Collection' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Time:</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_time(e.target.value)}
                                    value={newShipping_time}
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
                                    onChange={(e) => SetNewSender_name(e.target.value)}
                                    value={newSender_name}
                                    type='text' placeholder='Enter Sender Name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetNewSender_address(e.target.value)}
                                    value={newSender_address}
                                    type='text' placeholder='Enter Sender address' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Phone Number:</label>
                                    <input 
                                    onChange={(e) => SetNewPhn(e.target.value)}
                                    value={newPhn}
                                    type='number' placeholder='Enter Sender Phone' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Sender Email Address:</label>
                                    <input 
                                    onChange={(e) => SetNewEmail(e.target.value)}
                                    value={newEmail}
                                    type='text' placeholder='Enter Sender Email' 
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
                                    onChange={(e) => SetNewDesc(e.target.value)}
                                    value={newDesc}
                                    type='text' placeholder='Enter Description' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Item Length</label>
                                    <input 
                                    onChange={(e) => SetNewLength(e.target.value)}
                                    value={newLength}
                                    type='number' placeholder='Enter Item Length' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Item Width</label>
                                    <input 
                                    onChange={(e) => SetNewWidth(e.target.value)}
                                    value={newWidth}
                                    type='number' placeholder='Enter Item Width' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Quantity</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_quantity(e.target.value)}
                                    value={newShipping_quantity}
                                    type='number' placeholder='Enter Shipping Quantity' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Total Weight</label>
                                    <input 
                                    onChange={(e) => SetNewItem_weight(e.target.value)}
                                    value={newItem_weight}
                                    type='number' placeholder='Enter Item Weight' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-5 flex-col md:flex-row">
                            <div className='flex flex-col gap-1'>
                                <label>Total Weight (Vol)</label>
                                <input 
                                onChange={(e) => SetNewWeight_vol(e.target.value)}
                                value={newWeight_vol}
                                type='number' placeholder='Enter Item Weight Vol.' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Item Height</label>
                                <input 
                                onChange={(e) => SetNewHeight(e.target.value)}
                                value={newHeight}
                                type='number' placeholder='Enter Item Height' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Declared Value</label>
                                <input 
                                onChange={(e) => SetNewDec_value(e.target.value)}
                                value={newDec_value}
                                type='number' placeholder='Enter Declared value' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <span className="font-bold text-xl">Payment Details</span>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Pay Mode</label>
                                <input 
                                onChange={(e) => SetNewPaymode(e.target.value)}
                                value={newPaymode}
                                type='text' placeholder='Enter Pay mode' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Service Shipping</label>
                                <input 
                                onChange={(e) => SetNewService_type(e.target.value)}
                                value={newService_type}
                                type='text' placeholder='Enter Service type' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Courier Company</label>
                                <input 
                                onChange={(e) => SetNewCompany(e.target.value)}
                                value={newCompany}
                                type='text' placeholder='Enter Courier Company' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Shipping Mode</label>
                                <input 
                                onChange={(e) => SetNewShip_mode(e.target.value)}
                                value={newShip_mode}
                                type='text' placeholder='Enter Shipping Mode' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Price Lb</label>
                                <input 
                                onChange={(e) => SetNewPrice_lb(e.target.value)}
                                value={newPrice_lb}
                                type='number' placeholder='Enter Price Lb' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Discount</label>
                                <input 
                                onChange={(e) => SetNewDiscount(e.target.value)}
                                value={newDiscount}
                                type='number' placeholder='Enter Discount' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Insurance</label>
                                <input 
                                onChange={(e) => SetNewInsurance(e.target.value)}
                                value={newInsurance}
                                type='number' placeholder='Enter Insurance' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Customs Tariffs</label>
                                <input 
                                onChange={(e) => SetNewTariff(e.target.value)}
                                value={newTariff}
                                type='number' placeholder='Enter Customs Tariffs' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Tax</label>
                                <input 
                                onChange={(e) => SetNewTax(e.target.value)}
                                value={newTax}
                                type='number' placeholder='Enter Tax' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Declared Tax</label>
                                <input 
                                onChange={(e) => SetNewDec_tax(e.target.value)}
                                value={newDec_tax}
                                type='number' placeholder='Enter Declared Tax' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Re Expedition</label>
                                <input 
                                onChange={(e) => SetNewRe_exp(e.target.value)}
                                value={newRe_exp}
                                type='number' placeholder='Enter Re Expedition' 
                                className='w-full border border-black p-3 rounded-lg new-inp'/>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className='flex flex-col gap-1'>
                                <label>Courier Fee</label>
                                <input 
                                onChange={(e) => SetNewC_fee(e.target.value)}
                                value={newC_fee}
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
                                    onChange={(e) => SetNewDelivery_city(e.target.value)}
                                    value={newDelivery_city}
                                    type='text' placeholder='Enter Delivery City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Destination City:</label>
                                    <input 
                                    onChange={(e) => SetNewDestination_city(e.target.value)}
                                    value={newDestination_city}
                                    type='text' placeholder='Enter Destination City' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-col md:flex-row">
                                <div className='flex flex-col gap-1'>
                                    <label>Shipping Date</label>
                                    <input 
                                    onChange={(e) => SetNewShipping_time_rec(e.target.value)}
                                    value={newShipping_time_rec}
                                    type='text' placeholder='Enter Shipping Date' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Delivery Date:</label>
                                    <input 
                                    onChange={(e) => SetNewDelivery_time(e.target.value)}
                                    value={newDelivery_time}
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
                                    onChange={(e) => SetNewReceiver_name(e.target.value)}
                                    value={newReceiver_name}
                                    type='text' placeholder='Enter Recipient Name' 
                                    className='w-full border border-black p-3 rounded-lg new-inp'/>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label>Recipient Contact Address:</label>
                                    <input 
                                    onChange={(e) => SetNewReceiver_address(e.target.value)}
                                    value={newReceiver_address}
                                    type='text' placeholder='Enter Recipient address' 
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