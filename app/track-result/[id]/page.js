import Navbar from "@/components/Navbar";
import Image from "next/image";
import boxIcon from "@/public/box.png";
import locationIcon from "@/public/location.png";
import timeIcon from "@/public/time.png";
import calIcon from "@/public/cal.png";
import dirIcon from "@/public/dir.png";
import conIcon from "@/public/contact.png";
import weightIcon from "@/public/ib.png";
import sizeIcon from "@/public/size.png";
import { redirect } from 'next/navigation';
import HomeNav from "@/components/HomeNav";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import Logo from '@/public/logo.png';
import Barcode from '@/public/barcode.gif';
import PrintBtn from "@/components/PrintBtn";
import BarcodeEl from "@/components/BacodeEl";

const getItems = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_PURL}/api/items`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch item");
        }
        const items = await res.json();
        console.log("i am all the ", items);
        return items;
    } catch (error) {
        console.log(error);
    }
}

const getComments = async () => {
    try {
        const res = await fetch('https://www.akglobalshipservices.com/api/comments', {
            cache: 'no-store',
        });
        
        if(!res.ok) {
            throw new Error("Failed to fetch Comments");
        }

        const comments = await res.json();
        console.log("i am all the ", comments);
        return comments;
        

    } catch (error) {
        console.log("Error loading comments: ", error);
    }
};

export default async function TrackResult({ params }) {

    // const hideDisplay = () => {

    // }

    const { id } = params;
    const askedId = id;
    const allItems = await getItems();
    const allComs = await getComments();

    console.log("I am all Items: ", allItems);
    console.log("I am all Comments: ", allComs);
    console.log("I am Asked Id: ", askedId);

    const matchedItem = allItems.filter(obj => obj.tracking_id == askedId);
    if(matchedItem.length === 0) {
        console.log("error");
        redirect('/errorShow');
        return;
    }
    console.log("hey: ", matchedItem);
    console.log("my iD is: ", matchedItem[0]._id);
    const barData = matchedItem[0].tracking_id;
    const subTotal = matchedItem[0].price_lb * matchedItem[0].weight_vol;
    const cusTotal = matchedItem[0].weight_vol * matchedItem[0].tariff;
    const taxTotal = cusTotal * matchedItem[0].tax;
    const feeTotal = subTotal*1 + matchedItem[0].insurance*1 + cusTotal*1 + taxTotal*1;

    const matchedComment = allComs.filter(obj => obj.itemid == matchedItem[0]._id);
    console.log("Good Morning", matchedComment);

    return (
        <div className="w-full">
            <HomeNav />
            <CtaButton />
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
                                    {matchedItem[0].tracking_id}
                                </span>
                            </div>
                            <div>
                                <PrintBtn/>
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
                                                    {matchedItem[0].city_collection}
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
                                                    {matchedItem[0].origin_city}
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
                                                    {matchedItem[0].shipping_date}
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
                                                    {matchedItem[0].shipping_time}
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
                                                    {matchedItem[0].sender_name}
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
                                                    {matchedItem[0].sender_address}
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
                                                    {matchedItem[0].shipping_quantity}
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
                                                    {matchedItem[0].item_weight}
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
                                                    {matchedItem[0].delivery_city}
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
                                                    {matchedItem[0].destination_city}
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
                                                    {matchedItem[0].shipping_time_rec}
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
                                                    {matchedItem[0].delivery_time}
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
                                                    {matchedItem[0].receiver_name}
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
                                                    {matchedItem[0].receiver_address}
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
                        {matchedComment.map((t) => (
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
                                        <span>{matchedItem[0].sender_name}</span>
                                    </span>
                                    
                                    <span className="font-medium">{matchedItem[0].sender_address}</span>
                                    <span className="font-medium">{matchedItem[0].city_collection} | {matchedItem[0].origin_city}</span>
                                    <span className="font-medium">{matchedItem[0].phn}</span> 
                                    <span className="font-medium">{matchedItem[0].email}</span> 
                                </div>
                            </div>
                            <div className="w-6/12 flex items-center justify-end">
                                <div className="w-9/12">
                                    <table class="w-full border-collapse border border-border">
                                    <tbody>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Pay Mode</td>
                                        <td class="border border-black pr-2 py-3 text-right">{matchedItem[0].paymode}</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">
                                            Service Shipping
                                         </td>
                                        <td class="border border-black pr-2 py-3 text-right">{matchedItem[0].service_type}</td>
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
                                                <span>{matchedItem[0].company}</span>
                                                <span>{matchedItem[0].ship_mode}</span>
                                            </span>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Shipping date</td>
                                        <td class="border border-black pr-2 py-3 text-right">{matchedItem[0].shipping_time_rec}</td>
                                        </tr>
                                        <tr>
                                        <td class="border border-black bg-gray-500 pl-2 py-3 text-left
                                         text-white">Invoice No..</td>
                                        <td class="border border-black pr-2 py-3 text-right font-bold">{matchedItem[0].tracking_id}</td>
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
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].shipping_quantity}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].desc}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].item_weight}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].length}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].width}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].height}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].weight_vol}</td>
                                            <td class="border border-slate-700 py-3 text-center">{matchedItem[0].dec_value}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Price Lb:</span>
                                                    <span>{matchedItem[0].price_lb}</span>
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
                                                    <span>{matchedItem[0].discount}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{matchedItem[0].discount}</td>
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
                                                    <span>{matchedItem[0].insurance}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{matchedItem[0].insurance}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total volumetric weight:</span>
                                                    <span>{matchedItem[0].weight_vol}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Customs tariffs</span>
                                                    <span>{matchedItem[0].tariff}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{cusTotal}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total weight calculation:</span>
                                                    <span>{matchedItem[0].weight_vol}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Tax</span>
                                                    <span>{matchedItem[0].tax}</span>
                                                    <span>%</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center">{taxTotal}</td>
                                        </tr>

                                        <tr>
                                            <td class="border border-slate-700 py-1 text-left pl-2" colSpan={2}>
                                                <span className="flex gap-1 items-center">
                                                    <span className="font-bold">Total declared value:</span>
                                                    <span>{matchedItem[0].dec_value}</span>
                                                </span>
                                            </td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-center"></td>
                                            <td class="border border-slate-700 py-1 text-right pr-2 font-bold" colSpan={3}>
                                                <span className="flex items-end w-full justify-end gap-1">
                                                    <span className="font-bold">Declared tax</span>
                                                    <span>{matchedItem[0].dec_tax}</span>
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
                                            <td class="border border-slate-700 py-1 text-center">{matchedItem[0].re_exp}</td>
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
            <Footer />
        </div>
    );
}