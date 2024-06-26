import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";


export default function Footer() {
    return (
        <div className="w-full bg-black pt-12 text-white">
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="w-full flex flex-col gap-1 md:gap-0 md:flex-row items-center 
                text-center justify-center md:justify-between">
                    <div className="flex flex-col md:flex-row w-full md:w-7/12 justify-between">
                        <Link className="font-medium text-lg flex items-center gap-1 justify-center" href={'/'}>
                            <Image src={Logo} alt="" className="h-10 w-10" />
                            <span>AK GLOBAL SHIP SERVICES</span>
                        </Link>
                        <div className="flex flex-col gap-4 md:mt-0 mt-4">
                            <h1 className="font-medium text-blue-600">Contact</h1>
                            <Link href={"mailto:Support@akglobalshipservices.com"} className="text-sm" >Support@akglobalshipservices.com</Link>
                            <Link href={"tel:+6585489036"} className="text-sm" >+65 8548 9036 </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 flex justify-center">
                        <div className="flex flex-col gap-4 mt-4 md:mt-0 text-center">
                            <h1 className="fot-medium text-blue-600">Address</h1>
                            <Link href={"#"} className="text-sm" >(B01) 994 Bendemeer Road #06-06</Link>
                            <Link href={"#"} className="text-sm" >B-Central, Singapore 339943</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-12 py-5">
                    <span className="text-center">
                        2023 &copy; AK GLOBAL SHIP SERVICES. All rights reserved.
                    </span>
                </div>
            </div>
        </div>
    );
}