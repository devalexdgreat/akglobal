import Image from "next/image";
import logoIcon from "@/public/logo.png";

export default function Loading() {
    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen w-full">
            <div className="h-24 w-24 flex items-center justify-center flex-col gap-5">
                <Image src={logoIcon} alt="" className="h-full w-full"/>
                <span className="leading text-2xl text-black font-medium">Loading...</span>
            </div>
        </div>
    );
}