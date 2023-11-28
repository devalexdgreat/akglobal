import Navbar from '@/components/Navbar'
import TrackCard from '@/components/TrackCard'
import Image from 'next/image'
import Link from 'next/link'

export default function ErrShow() {

  return (
    <main className="">
      <Navbar />
      <div className='w-full'>
        <div className='w-10/12 md:w-5/12 mx-auto bg-red-500 flex items-center justify-center my-32 py-6
        rounded-lg'>
            <div className='flex gap-8'>
                <div>
                    <h1 className='text-white font-bold'>Error Not Found (: </h1>
                </div>
                <div>
                    <Link href={"/"} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4
                    rounded-lg'>Try Again</Link>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
