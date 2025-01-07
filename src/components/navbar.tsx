import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className='w-full px-32 bg-[#171110] flex justify-between'>
       {/* LEFT SIDE LOGO */} 
       <div>
        <Image className='w-[80px] h-[80px]' src="/images/logo.png" alt='star' width={1000} height={500}></Image>
       </div>

       {/* CENTER LINKS */}
       <div className='flex gap-6 mt-8'>
        <Link href={"#"} className="text-[16px] font-normal text-white">
              Home
        </Link>
        <Link href={"#"} className="flex gap-1 text-[16px] font-normal text-white">
              Services <ChevronDown />
        </Link>
        <Link href={"#"} className="text-[16px] font-normal text-white">
              About us
        </Link>
        <Link href={"#"} className="text-[16px] font-normal text-white">
              Resources
        </Link>
        <Link href={"#"} className="text-[16px] font-normal text-white">
              SEO Tools
        </Link>
       </div>

       {/* RIGHT SIDE ACTION BUTTON */}

       <div className='mt-5'>
        <Button text='Book a Demo' />
       </div>
    </nav>
  )
}

export default Navbar