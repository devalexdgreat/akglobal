"use client";

import Image from "next/image";
import boxIcon from "@/public/box.png";
import locationIcon from "@/public/location.png";
import timeIcon from "@/public/time.png";
import calIcon from "@/public/cal.png";
import dirIcon from "@/public/dir.png";
import conIcon from "@/public/contact.png";
import weightIcon from "@/public/ib.png";
import sizeIcon from "@/public/size.png";
import BarcodeEl from "./BacodeEl";
import PrintBtn from "./PrintBtn";
import Logo from '@/public/logo.png';

export default function Result({ tracking_id, origin_city, city_collection, shipping_date, shipping_time, sender_name, 
    sender_address, shipping_quantity, item_weight, phn, email, paymode, service_type, company, 
    ship_mode, desc, length, width, height, weight_vol, dec_value, price_lb, discount, insurance, 
    tariff, tax, dec_tax, re_exp, c_fee, delivery_city, destination_city,
    shipping_time_rec, delivery_time, receiver_name, receiver_address, 
    commentData, barData, subTotal, taxTotal, cusTotal, feeTotal }) {

    const Print = () =>{     
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents; 
    }
    console.log("I am tracking id: ", tracking_id);

    return (
        <div className="w-full pt-24">
                <div className="w-11/12 mx-auto flex gap-8 flex-col md:flex-row">
                    <div className="w-full md:w-7/12 flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between w-full">
                            <div className="flex gap-2 items-center">
                                <div className="h-10 w-10">
                                    <Image src={boxIcon} className="" alt=""/>
                                </div>
                                <span className="font-bold">Pending Collection</span>
                            </div>
                            <div className="flex flex-col">
                                <span>Track Shipment ID: </span>
                                <span className="font-bold">
                                    {tracking_id}
                                </span>
                            </div>
                            <div>
                            <button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg" onClick={Print}>
                                Print Shipment
                            </button>
                            </div>
                        </div>

                        <div className="border p-10 w-full">
                            <div className="flex flex-col w-full">
                                <div className="bg-blue-500 py-2 px-2 w-full">
                                    <span className="text-white font-medium">SENDER/ORIGIN</span>
                                </div>
                                <div className="flex flex-col border-t mt-10 w-full">
                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>City Collection</span>
                                                <span className="font-bold">
                                                    {city_collection}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Origin City</span>
                                                <span className="font-bold">
                                                    {origin_city}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={calIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Shipping Date</span>
                                                <span className="font-bold">
                                                    {shipping_date}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={timeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Shipping Time</span>
                                                <span className="font-bold">
                                                    {shipping_time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={conIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Name</span>
                                                <span className="font-bold">
                                                    {sender_name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={dirIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Address</span>
                                                <span className="font-bold">
                                                    {sender_address}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={sizeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Shipping Quantity</span>
                                                <span className="font-bold">
                                                    {shipping_quantity}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={weightIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Total Weight (Ibs)</span>
                                                <span className="font-bold">
                                                    {item_weight}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border p-10 w-full">
                            <div className="flex flex-col w-full">
                                <div className="bg-blue-500 py-2 px-2 w-full">
                                    <span className="text-white font-medium">RECIPIENT/DESTINATION</span>
                                </div>
                                <div className="flex flex-col border-t mt-10 w-full">
                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Delivery City</span>
                                                <span className="font-bold">
                                                    {delivery_city}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Destination City</span>
                                                <span className="font-bold">
                                                    {destination_city}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={calIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Shipping Date</span>
                                                <span className="font-bold">
                                                    {shipping_time_rec}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={timeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Delivery Date</span>
                                                <span className="font-bold">
                                                    {delivery_time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-3 flex justify-between w-full gap-4">
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={conIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Name</span>
                                                <span className="font-bold">
                                                    {receiver_name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={dirIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Address</span>
                                                <span className="font-bold">
                                                    {receiver_address}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 p-12 border h-auto">
                        <div className="w-full">
                           <h1 className="font-bold text-xl">Shipping history</h1> 
                        </div>
                        <div className="flex flex-col gap-5">
                        {commentData.map((t) => (
                            <ul key={t._id} className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>{t.ddate}</h1>
                                        <h1 className="font-bold mb-4">{t.dquote}</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                {t.dcomment}
                                                <svg class="absolute left-0 top-full h-2 w-full text-black" 
                                                x="0px" y="0px" viewBox="0 0 255 255"><polygon class="fill-current" 
                                                points="0,0 127.5,127.5 255,0" /></svg>
                                            </div>
                                            </div>
                                            <span className="py-1.5 px-4 hover:cursor-pointer bg-white border 
                                            hover:bg-gray-200 rounded-lg
                                            font-medium">+ Comments</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <h1>{t.dtime}</h1>
                                    </div>
                                </li>
                            </ul>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="w-8/12 mx-auto" id='printablediv' style={{ display : "none"}}>
                    <div className="w-full mb-32">
                        <div className="flex justify-between gap-25 items-center border-b border-black pb-4">
                            <div className="flex gap-2 items-center">
                                <div className="h-12 w-12">
                                    <Image src={Logo} alt="" className="w-full h-full" />
                                </div>
                                <span className="flex flex-col gap-1 font-bold">
                                    <span>Ak Global</span>
                                    <span>Ship Services</span>
                                </span> 
                            </div>
                            
                            <div className="flex flex-col text-center">
                                <span>NIT: 800124570-87</span>
                                <span>Phone: 6692843100</span>
                                <span>Email: Support@akglobalshipservices.com</span>
                                <span>Address: (B01) 994 Bendemeer Road <br/> #06-06 B-Central, Singapore 339943</span>
                            </div>
                            <div className="flex items-center justify-center h-24 w-52">
                                <BarcodeEl data={barData}/>
                            </div>
                        </div>
                        <div className="flex item-center justify-between mt-12">
                            <div className="w-6/12 flex items-center justify-center">
                                <div className="w-full flex flex-col">
                                    <span className="flex flex-col mb-6 font-bold">
                                        <span className="">Bill to </span>
                                        <span>{sender_name}</span>
                                    </span>
                                    
                                    <span className="font-medium">{sender_address}</span>
                                    <span className="font-medium">{city_collection} | {origin_city}</span>
                                    <span className="font-medium">{phn}</span> 
                                    <span className="font-medium">{email}</span> 
                                </div>
                            </div>
                            <div className="w-6/12 flex items-center justify-end">
                                <div className="w-9/12">
                                    <table class="w-full border-collapse border border-border">
                                    <tbody>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Pay Mode</td>
                                        <td class="border border-black pr-2 py-3 text-right">{paymode}</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">
                                            Service Shipping
                                         </td>
                                        <td class="border border-black pr-2 py-3 text-right">{service_type}</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">
                                            <span className="flex flex-col gap-1">
                                                <span>Courier Company</span>
                                                <span>Shipping Mode</span>
                                            </span>
                                         </td>
                                        <td class="border border-black pr-2 py-3 text-right">
                                            <span className="flex flex-col gap-1">
                                                <span>{company}</span>
                                                <span>{ship_mode}</span>
                                            </span>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Shipping date</td>
                                        <td class="border border-black pr-2 py-3 text-right">{shipping_time_rec}</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Invoice No..</td>
                                        <td class="border border-black pr-2 py-3 text-right font-bold">{tracking_id}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-12">
                            <div className="w-full">
                                <table class="border-collapse border border-slate-500 w-full text-sm">
                                    <thead>
                                        <tr>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Quantity</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Description</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Weight<br/>(lb)</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Length<br/>(cm)</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Width<br/>(cm)</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Height<br/>(cm)</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Weight<br/> vol.<br/>(lb)</th>
                                        <th class="border border-slate-600 py-3 bg-gray-500 text-white">Declared <br/>value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-slate-700 py-3 text-center">{shipping_quantity}</td>
                                            <td class="border border-slate-700 py-3 text-center">{desc}</td>
                                            <td class="border border-slate-700 py-3 text-center">{item_weight}</td>
                                            <td class="border border-slate-700 py-3 text-center">{length}</td>
                                            <td class="border border-slate-700 py-3 text-center">{width}</td>
                                            <td class="border border-slate-700 py-3 text-center">{height}</td>
                                            <td class="border border-slate-700 py-3 text-center">{weight_vol}</td>
                                            <td class="border border-slate-700 py-3 text-center">{dec_value}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Price Lb:</span>
                                                    <span>{price_lb}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end">
                                                    <span className="font-bold">Subtotal</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{subTotal}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex gap-1 items-end w-full justify-end">
                                                    <span className="font-bold">Discount</span>
                                                    <span>{discount}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{discount}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total pounds weight:</span>
                                                    <span>0</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Shipping insurance</span>
                                                    <span>{insurance}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{insurance}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total volumetric weight:</span>
                                                    <span>{weight_vol}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Customs tariffs</span>
                                                    <span>{tariff}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{cusTotal}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total weight calculation:</span>
                                                    <span>{weight_vol}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Tax</span>
                                                    <span>{tax}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{taxTotal}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total declared value:</span>
                                                    <span>{dec_value}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Declared tax</span>
                                                    <span>{dec_tax}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">0</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    Re expedition
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{re_exp}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    COURIER FEE  $	
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{feeTotal}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="w-full flex justify-center border-b border-black">
                                <span className="uppercase text-center tracking-[10px] mt-4 mb-1">Terms</span>
                            </div>
                            <div className="w-full mt-1">
                                <span className="w-full">
                                ACCEPTED: This Invoice is a title value in accordance with 
                                the provisions of art. 3 of law 1231 of July 17/08. 
                                The signature by third parties in representation, mandate 
                                or other quality on behalf of the buyer implies its obligation 
                                in accordance with art. 640 of the commercial code.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}