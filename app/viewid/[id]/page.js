import AddNewComment from "@/components/AddNewComment";
import AdminNav from "@/components/AdminNav";
import CommentList from "@/components/CommentList";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import addIcon from '@/public/plus.png';

const getItemById = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_PURL}/api/items/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch item");
        }

        return res.json();
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

export default async function viewId({ params }) {
    const { id } = params;
    const { item } = await getItemById(id);
    const com = await getComments();
    console.log("ju si", com);
    
    const { tracking_id, origin_city, city_collection, shipping_date, shipping_time, sender_name, 
        sender_address, shipping_quantity, item_weight, phn, email, paymode, service_type, company, 
        ship_mode, desc, length, width, height, weight_vol, dec_value, price_lb, discount, insurance, 
        tariff, tax, dec_tax, re_exp, c_fee, delivery_city, destination_city,
        shipping_time_rec, delivery_time, receiver_name, receiver_address } = item;

        const queryId = item._id;
    return (
        <div className="w-full">
            <AdminNav />
            <div className="w-full mt-10 mb-16">
                <div className="w-full md:w-11/12 p-5 shadow mx-auto md:mr-0 md:ml-12">
                    <h1 className="text-xl font-bold mb-4">More details</h1>

                    <div className="w-full flex gap-8 flex-col md:flex-row">
                        <div className="w-full md:w-4/12">
                            <div className="w-full bg-blue-500 text-white p-2 mb-3">
                                <h1>Sender Info</h1>
                            </div>
                            {/* <h1>this is {ddate}</h1> */}
                            <span><span className="font-bold">Tracking Id: </span>{tracking_id}</span><br/>
                            <span><span className="font-bold">Origin City: </span>{origin_city}</span><br/>
                            <span><span className="font-bold">City Collection: </span>{city_collection}</span><br/>
                            <span><span className="font-bold">Shipping Date: </span>{shipping_date}</span><br/>
                            <span><span className="font-bold">Shipping Time: </span>{shipping_time}</span><br/>
                            <span><span className="font-bold">Sender Name: </span>{sender_name}</span><br/>
                            <span><span className="font-bold">Sender Address: </span>{sender_address}</span><br/>
                            <span><span className="font-bold">Sender Email: </span>{email}</span><br/> 
                            <span><span className="font-bold">Sender Phone: </span>{phn}</span><br/> 
                        </div>
                        <div className="w-full md:w-4/12">
                            <div className="w-full bg-blue-500 text-white p-2 mb-3">
                                <h1>Item / Payment Info</h1>
                            </div>
                            {/* <h1>this is {ddate}</h1> */}
                            <span className="flex gap-1">
                                <span><span className="font-bold">Total Weight: </span>{item_weight}</span>,
                                <span><span className="font-bold">Total Weight(vol): </span>{weight_vol}</span>
                            </span>
                            <span><span className="font-bold">Item Description: </span>{desc}</span><br/>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Length: </span>{length}</span>,
                                <span><span className="font-bold">Width: </span>{width}</span>,
                                <span><span className="font-bold">Height: </span>{height}</span>
                            </span>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Shipping Quantity: </span>{shipping_quantity}</span>,
                                <span><span className="font-bold">Total Insurance: </span>{insurance}</span>
                            </span>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Paymode: </span>{paymode}</span>,
                                <span><span className="font-bold">Discount: </span>{discount}</span>
                            </span>
                            
                            <span><span className="font-bold">Service Shipping: </span>{service_type}</span><br/>
                            <span><span className="font-bold">Shipping Mode: </span>{ship_mode}</span><br/>
                            <span><span className="font-bold">Courier Company: </span>{company}</span><br/>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Tax: </span>{tax}</span>,
                                <span><span className="font-bold">Declared Tax: </span>{dec_tax}</span>
                            </span>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Tariffs: </span>{tariff}</span>,
                                <span><span className="font-bold">Price Lb: </span>{price_lb}</span>
                            </span>
                            <span className="flex gap-1">
                                <span><span className="font-bold">Re Expedition: </span>{re_exp}</span>,
                                <span><span className="font-bold">Declared Value: </span>{dec_value}</span>
                            </span>
                        </div>
                        <div className="w-full md:w-4/12">
                            <div className="w-full bg-blue-500 text-white p-2 mb-3">
                                <h1>Receiver Info</h1>
                            </div>
                            <span><span className="font-bold">Delivery City: </span>{delivery_city}</span><br/>
                            <span><span className="font-bold">Destination City: </span>{destination_city}</span><br/>
                            <span><span className="font-bold">Shipping Date: </span>{shipping_time_rec}</span><br/>
                            <span><span className="font-bold">Delivery Date: </span>{delivery_time}</span><br/>
                            <span><span className="font-bold">Receiver Name: </span>{receiver_name}</span><br/>
                            <span><span className="font-bold">Receiver Address: </span>{receiver_address}</span><br/> 
                        </div>
                    </div>
                </div>
                
                <div className="w-11/12 mx-auto mt-12">
                    <h1 className="font-bold text-xl">Shipping History</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pb-52 relative items-grid">
                        <Link href={`/createcom/${id}`} className="flex items-center justify-center gap-2 hover:bg-slate-100 rounded-lg
                        py-2">
                            <div className="rounded-full flex items-center justify-center h-12 w-12 bg-blue-500 hover:bg-blue-600">
                                <Image src={addIcon} className="h-5/6 w-10/12" alt="" />
                            </div>
                            <span className="font-medium">Add New comment</span>
                        </Link>
                        <CommentList queryData={queryId} comData={com}/>
                    </div>
                </div>
            </div>
        </div>
    );
}