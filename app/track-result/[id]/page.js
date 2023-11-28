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


    const matchedComment = allComs.filter(obj => obj.itemid == matchedItem[0]._id);
    console.log("Good Morning", matchedComment);

    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full pt-24">
                <div className="w-11/12 mx-auto flex gap-8 flex-col md:flex-row">
                    <div className="w-full md:w-7/12 flex flex-col gap-8">
                        <div className="flex items-center justify-between w-full">
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
                                                <span>Origin City</span>
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
                                                <span>Shipping Time</span>
                                                <span className="font-bold">
                                                    {matchedItem[0].delivery_time}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={timeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Delivery Time</span>
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
            </div>
        </div>
    );
}