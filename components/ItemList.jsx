"use client";
import Link from "next/link";
import AddNewIdBtn from "./AddNewIdBtn";
import editIcon from '@/public/edit.png';
import moreIcon from '@/public/more.png';
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";
import { useEffect, useState } from "react";



export default function ItemList() {

    const [itemsFound, setItemsFound] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch('https://www.akglobalshipservices.com/api/items', {
                    cache: 'no-store',
                });
                
                if(!res.ok) {
                    throw new Error("Failed to fetch items");
                }
                
                const items = await res.json();
                console.log(items);
    
                setItemsFound(items);
                return items;
            } catch (error) {
                console.log("Error loading items: ", error);
            }
        };
        getItems();
    }, [])

   

    return(
        <>
            {itemsFound.map((t) => (
            <div key={t._id} className="border border-blue-500 rounded-lg p-4 relative 
            hover:bg-slate-100 admin-item group/item">
                <div className="absolute flex md:invisible group-hover/item:visible 
                md:bottom-[40%] md:left-[20%] w-40 gap-2 pt-2 items-center md:flex-col flex-col right-[-13%] top-0
                justify-center spe-opt">
                    <Link href={`/editid/${t._id}`} className="h-12 w-12 rounded-full flex items-center 
                    justify-center bg-blue-500 hover:bg-blue-600" title="Edit"> 
                        <Image src={editIcon} alt="edit" className="h-3/6 w-6/12" />
                    </Link>
                    <DeleteBtn id={t._id} />
                    <Link href={`/viewid/${t._id}`} className="bg-blue-500 h-12 w-12 rounded-full flex items-center 
                    text-white justify-center hover:bg-blue-600" title="view more">
                        <Image src={moreIcon} alt="more" className="h-3/6 w-6/12" />
                    </Link>
                </div>
                <div>
                    <h1 className="truncate"><span className="font-bold">Tracking ID: </span>{t.tracking_id}</h1>
                    <h1 className="truncate"><span className="font-bold">Origin City: </span>{t.origin_city}</h1>
                    <h1 className="truncate"><span className="font-bold">City Collection: </span>{t.city_collection}</h1>
                    <h1 className="truncate"><span className="font-bold">Shipping Date: </span>{t.shipping_date}</h1>
                    <h1 className="truncate"><span className="font-bold">Shipping Time: </span>{t.shipping_time}</h1>
                    <h1 className="truncate"><span className="font-bold">Sender Name: </span>{t.sender_name}</h1>
                    <h1 className="truncate"><span className="font-bold">Sender Address: </span>{t.sender_address}</h1>
                    <h1 className="truncate"><span className="font-bold">Shipping Quantity: </span>{t.shipping_quantity}</h1>
                    <h1 className="truncate"><span className="font-bold">Total Weight: </span>{t.item_weight}</h1>
                    <h1 className="truncate"><span className="font-bold">Delivery City: </span>{t.delivery_city}</h1>
                    <h1 className="truncate"><span className="font-bold">Destination City: </span>{t.destination_city}</h1>
                    <h1 className="truncate"><span className="font-bold">Shipping Time(Rec): </span>{t.shipping_time_rec}</h1>
                    <h1 className="truncate"><span className="font-bold">Delivery Time: </span>{t.delivery_time}</h1>
                    <h1 className="truncate"><span className="font-bold">Recipient Name: </span>{t.receiver_name}</h1>
                    <h1 className="truncate"><span className="font-bold">Recipient Address: </span>{t.receiver_address}</h1>
                </div>
            </div>
            ))}
        </>
    );
}