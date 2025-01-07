import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full text-center h-auto pt-12 px-36 bg-black text-white'>
        <h1 className='font-extrabold text-6xl'>Transform Your Amazon Advertising with</h1>
        <h2 className='font-bold text-6xl pt-8 text-[#f48080]'>AI-Powered Precision</h2>
        <p className='font-medium text-2xl pt-4 text-white text-opacity-80'>Seamlessly automate campaigns, boost performance, and drive profits.</p>

        <div className='flex gap-6 justify-center mt-8'>
        <button className="px-12 py-2 bg-white text-[#f48080] rounded-lg hover:bg-[#f48080] hover:text-white focus:outline-none">
            Contact us
        </button>
        <button className="px-12 py-2 bg-[#f48080] text-white rounded-lg hover:bg-[#f96666] focus:outline-none">
            Book a Demo
        </button>
       </div>

       <div className='mt-12 flex items-center justify-center text-center'>
        <Image className='w-[1200px] h-[640px] rounded-lg' src="/images/dashboard.png" alt='star' width={1000} height={500}></Image>
       </div>
    </div>
  )
}

export default Hero