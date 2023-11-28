"use client";
import { useState } from "react";
import Link from "next/link";
import TrackInfo from "./TrackInfo";
import ErrorBox from "./ErrorBox";
import { useRouter } from "next/navigation";

export default function TrackCard() {
    const router = useRouter();

    const [searchVar, setSearchVar] = useState("");
    const [newErr, setNewErr] = useState("");
    const [showErrItem, setShowErrItem] = useState("none");

    const passData = () => {
        try {
            if(searchVar === "" || searchVar.length < 9) {
                console.log("Empty or Invalid Tracking ID");
                setNewErr("Empty or Invalid Tracking ID");
                setShowErrItem("flex");
                return;
            }
            router.push(`/track-result/${searchVar}`)
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="w-full">
                <div className="w-10/12 md:w-5/12 mx-auto text-center mt-20 mb-2">
                    <h1 className="text-2xl md:text-3xl font-medium">
                        Check the location and status of your shipments.
                    </h1>
                </div>

                <div className="w-full py-12">
                    <div className="w-11/12 md:w-10/12 mx-auto overflow-hidden">
                        <div className="w-full bg-white md:w-6/12 mx-auto flex justify-between rounded-lg p-1 
                        border border-black h-14">
                            <input 
                            onChange={(e) => setSearchVar(e.target.value)}
                            value={searchVar}
                            type="text" placeholder="Enter your tracking number(s)" 
                            className="w-full ps-3 track-inp"/>
                            <button type="submit" onClick={passData} className="py-2 px-8 
                            bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                            font-medium md:font-bold">Track</button>
                        </div>
                        <div className="mt-12 mb-44">
                            <div className="flex flex-col w-11/12 md:w-6/12 mx-auto">
                                <ErrorBox errData={newErr} displayData={showErrItem}/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}