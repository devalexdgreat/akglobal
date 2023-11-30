import Footer from '@/components/Footer'
import HomeNav from '@/components/HomeNav'
import Navbar from '@/components/Navbar'
import TrackCard from '@/components/TrackCard'
import Image from 'next/image'
import planeIcon from '@/public/flight.png';
import shipIcon from '@/public/ship.png';
import contractIcon from '@/public/contracts.png';
import pjxIcon from '@/public/project.png';
import customIcon from '@/public/custom.png';
import boutiqueIcon from '@/public/boutique.png';
import goodIcon from '@/public/goods.png';
import wineIcon from '@/public/wine.png';
import imgOne from '@/public/img1.jpg';
import imgTwo from '@/public/img2.jpg';
import imgThree from '@/public/img3.jpg';
import imgFour from '@/public/img4.jpg';
import imgFive from '@/public/img5.jpg';
import imgSix from '@/public/img6.jpg';
import imgSeven from '@/public/img7.jpg';

import logoOne from '@/public/logo1.png';
import logoTwo from '@/public/logo2.jpg';
import logoThr from '@/public/logo3.png';
import logoFor from '@/public/logo4.png';
import logoFiv from '@/public/logo5.png';
import logoSix from '@/public/logo6.png';
import logoSev from '@/public/logo7.png';
import logoEig from '@/public/logo8.jpg';
import logoNin from '@/public/logo9.jpg';
import logoTen from '@/public/logo10.png';
import logoEle from '@/public/logo11.jpg';
import logoTwe from '@/public/logo12.jpg';
import CtaButton from '@/components/CtaButton'

export default function Home() {

  return (
    <main className="w-full bg-[#E7EEF6] relative">
      <HomeNav />
      <CtaButton />
      <div className='w-full h-screen'>
        <div className='w-full mx-auto h-5/6 flex flex-col md:justify-center md:items-center'>
          <div className='text-center w-full h-full flex items-center justify-center heroBanner'>
            <h1 className='text-base md:text-6xl flex flex-col font-bold w-10/12 mx-auto md:w-9/12 
            text-center text-white animate-pulse'>
              <span>Global Shipping Services</span>
              <span>A Boutique Forwarding Experience</span>
            </h1>
          </div>
          
          <div className='mt-12 w-full'>
            <div className='text-center'>
              <h1 className='font-bold text-2xl md:text-xl w-10/12 mx-auto'>Welcome to AK GLOBAL SHIPPING SERVICES PTE.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='flex justify-center flex-col gap-8 mt-6'>
          <span className='text-center text-lg leading'>
            Since 2004 it is all about you – the customer. 
            Without good customers we don’t have a company. 
            Our most important asset is the people working in the company, 
            they provide the daily service and know our values.
          </span>
          <span className='text-center text-lg leading'>
            We provide International Freight Forwarding Services 
            to a mix of industries. Our services include: Air, 
            Ocean and Out of Gauge cargo.
          </span>
          <span className='text-center text-lg leading'>
            We have 8 locations in the USA and a worldwide 
            network of partner agents providing us with a 
            global reach to more than 191 countries around the world.
          </span>
          <span className='text-center text-lg leading'>
            We’re here to help.
          </span>
        </div>
        <div className='flex justify-center flex-col mt-8'>
          <h1 className='text-center font-bold text-2xl'>Our Motto:</h1>
          <span className='text-center bg-blue-500 py-1 px-1 w-11/12 md:w-4/12 mx-auto text-white
          font-bold text-2xl md:text-3xl'>WE KEEP OUR PROMISES</span>
        </div>
      </div>

      <div className='w-full mt-12 bg-white py-12'>
        <div className='w-11/12 mx-auto'>
          <div className='w-full md:w-6/12 mx-auto text-center'>
            <h1 className='text-xl md:text-3xl font-bold text-blue-500'>Services</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
            <div className=''>
              <Image src={planeIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={shipIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={pjxIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={customIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={boutiqueIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={contractIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={wineIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={goodIcon} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full mt-16 py-5'>
        <div className='w-11/12 mx-auto'>
          <div className='w-full md:w-6/12 mx-auto text-center'>
            <h1 className='font-bold text-xl md:text-3xl text-blue-500'>Gallery</h1>
          </div>
          <div className='columns-1 md:columns-4 gap-5 [&>div:not(:first-child)]:mt-5 mt-16'>
            <div className=''>
              <Image src={imgOne} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgTwo} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgThree} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgFour} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgFive} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgSix} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
            <div className=''>
              <Image src={imgSeven} alt='' className='w-full h-full hover:scale-110 duration-700' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white pb-12'>
        <div className='w-11/12 mx-auto pt-12'>
          <div className='w-full md:w-8/12 mx-auto my-12'>
            <h1 className='font-bold text-xl md:text-3xl text-blue-500 text-center'>Networks & Accreditations</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto place-items-center'>
            <Image src={logoOne} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoTwo} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoThr} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoFor} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoFiv} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoSix} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoSev} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoEig} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoNin} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoTen} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoEle} alt='' className='hover:scale-110 duration-700'/>
            <Image src={logoTwe} alt='' className='hover:scale-110 duration-700'/>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
