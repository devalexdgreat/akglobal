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

export default function TrackResult() {
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
                                <span className="font-bold">374747577577</span>
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
                                                <span className="font-bold">Malaysia</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Origin City</span>
                                                <span className="font-bold">Kuala Lumpur</span>
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
                                                <span className="font-bold">2023-08-14</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={timeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Shipping Time</span>
                                                <span className="font-bold">DHL 7-10 DAYS</span>
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
                                                <span className="font-bold">Janice Celine Watkins</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={dirIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Address</span>
                                                <span className="font-bold">
                                                    Stonor Residence 27-8 No. 3 Lorong Stonor
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
                                                <span className="font-bold">1</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={weightIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Total Weight (Ibs)</span>
                                                <span className="font-bold">560</span>
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
                                                <span className="font-bold">Tasmania</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={locationIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Origin City</span>
                                                <span className="font-bold">Tasmania</span>
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
                                                <span className="font-bold">DHL 7-10 DAYS</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={timeIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Delivery Time</span>
                                                <span className="font-bold">2023-08-14 00:00:00</span>
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
                                                <span className="font-bold">Leslie J. Walkden</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center w-3/6 border-b py-6">
                                            <div className="h-10 w-10">
                                                <Image src={dirIcon} className="" alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span>Contact Address</span>
                                                <span className="font-bold">
                                                    2782 West Tamar Highway Loira
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
                            <ul className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>2023/08/09</h1>
                                        <h1 className="font-bold mb-4">Pending quote</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                Shipment fee required
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
                                        <h1>10:23:33 pm</h1>
                                    </div>
                                </li>
                            </ul>
                            <ul className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>2023/08/09</h1>
                                        <h1 className="font-bold mb-4">Pending quote</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                Shipment fee required
                                                <svg class="absolute left-0 top-full h-2 w-full text-black" 
                                                x="0px" y="0px" viewBox="0 0 255 255"><polygon class="fill-current" 
                                                points="0,0 127.5,127.5 255,0" /></svg>
                                            </div>
                                            </div>
                                            <span className="py-1.5 px-4 hover:cursor-pointer bg-white border rounded-lg
                                            font-medium">+ Comments</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <h1>10:23:33 pm</h1>
                                    </div>
                                </li>
                            </ul>
                            <ul className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>2023/08/09</h1>
                                        <h1 className="font-bold mb-4">Pending quote</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                Shipment fee required
                                                <svg class="absolute left-0 top-full h-2 w-full text-black" 
                                                x="0px" y="0px" viewBox="0 0 255 255"><polygon class="fill-current" 
                                                points="0,0 127.5,127.5 255,0" /></svg>
                                            </div>
                                            </div>
                                            <span className="py-1.5 px-4 hover:cursor-pointer bg-white border rounded-lg
                                            font-medium">+ Comments</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <h1>10:23:33 pm</h1>
                                    </div>
                                </li>
                            </ul>
                            <ul className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>2023/08/09</h1>
                                        <h1 className="font-bold mb-4">Pending quote</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                Shipment fee required
                                                <svg class="absolute left-0 top-full h-2 w-full text-black" 
                                                x="0px" y="0px" viewBox="0 0 255 255"><polygon class="fill-current" 
                                                points="0,0 127.5,127.5 255,0" /></svg>
                                            </div>
                                            </div>
                                            <span className="py-1.5 px-4 hover:cursor-pointer bg-white border rounded-lg
                                            font-medium">+ Comments</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <h1>10:23:33 pm</h1>
                                    </div>
                                </li>
                            </ul>
                            <ul className="border-l-2 border-blue-500 p-4 list-disc">
                                <li className="flex justify-between">
                                    <div>
                                        <h1>2023/08/09</h1>
                                        <h1 className="font-bold mb-4">Pending quote</h1>
                                        <span class="group relative">
                                            <div class="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                                            <div class="bottom-full right-0 rounded bg-black px-4 py-1 text-base text-white whitespace-nowrap">
                                                Shipment fee required
                                                <svg class="absolute left-0 top-full h-2 w-full text-black" 
                                                x="0px" y="0px" viewBox="0 0 255 255"><polygon class="fill-current" 
                                                points="0,0 127.5,127.5 255,0" /></svg>
                                            </div>
                                            </div>
                                            <span className="py-1.5 px-4 hover:cursor-pointer bg-white border rounded-lg
                                            font-medium">+ Comments</span>
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <h1>10:23:33 pm</h1>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}