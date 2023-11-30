import Navbar from '@/components/Navbar';
import TrackCard from '@/components/TrackCard';
import Image from 'next/image';
import Link from 'next/link';
import errorImg from "@/public/error.jpg";
import HomeNav from '@/components/HomeNav';
import CtaButton from '@/components/CtaButton';

export default function ErrShow() {

  return (
    <main className="relative">
      <HomeNav />
      <CtaButton />
      <div className='w-full flex items-center flex-col'>
        <div className='w-10/12 md:w-6/12 mx-auto flex items-center justify-center'>
          <Image src={errorImg} alt="" className='w-64 h-64'/>
        </div>
        
        <div className='w-10/12 md:w-5/12 mx-auto bg-red-500 flex items-center justify-center py-6
        rounded-lg'>
            <div className='flex gap-8'>
                <div>
                    <h1 className='text-white font-bold'>Error Not Found (: </h1>
                </div>
                <div>
                    <Link href={"/track"} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4
                    rounded-lg'>Try Again</Link>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
