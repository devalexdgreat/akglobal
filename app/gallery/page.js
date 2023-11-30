import HomeNav from "@/components/HomeNav";
import Image from "next/image";
import imgOne from '@/public/img1.jpg';
import imgTwo from '@/public/img2.jpg';
import imgThree from '@/public/img3.jpg';
import imgFour from '@/public/img4.jpg';
import imgFive from '@/public/img5.jpg';
import imgSix from '@/public/img6.jpg';
import imgSeven from '@/public/img7.jpg';
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";

export default function Gallery() {
    return (
        <div className="w-full">
            <div className="w-full">
                <HomeNav />
                <CtaButton />
                <div className="w-11/12 mx-auto my-12">
                    <div className='w-full md:w-6/12 mx-auto text-center'>
                        <h1 className='font-bold text-xl md:text-3xl text-blue-500 mb-6'>Gallery</h1>
                        <span className="text-xl font-semibold">
                            Global Shipping Services <br/>A Boutique Forwarding Experience
                        </span>
                    </div>
                    <div className='columns-1 md:columns-4 gap-5 [&>div:not(:first-child)]:mt-5 mt-16'>
                    <div className=''>
                        <Image src={imgOne} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgTwo} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgThree} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgFour} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgFive} alt='' className='w-full h-full hover:scale-110 duration-700
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgSix} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    <div className=''>
                        <Image src={imgSeven} alt='' className='w-full h-full hover:scale-110 duration-700 
                        hover:brightness-50' />
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}