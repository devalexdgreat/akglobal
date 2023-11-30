import supportIcon from '@/public/support.png';
import Image from 'next/image';
import Link from 'next/link';
export default function CtaButton() {
    return (
        <Link href={"/contact"} className="h-16 flex items-start rounded-lg bg-blue-500 text-white py-3 px-3  
        fixed top-[85%] left-[75%] md:top-[85%] md:left-[90%] z-30 animate-pulse">
            <div className='w-full h-full flex gap-2 items-center justify-center'>
                <Image src={supportIcon} alt='' className='h-12 w-12' />
            </div>
        </Link>
    );
}