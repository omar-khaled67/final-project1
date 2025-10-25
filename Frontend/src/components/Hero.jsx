import React from 'react'
import { splitAtTopLevelOnly } from './../../node_modules/tailwindcss/src/util/splitAtTopLevelOnly';

function Hero() {
  return (
    <div className="bg-[url('/hero1.jpg')] bg-no-repeat bg-cover h-[85vh] px[200px]" >
        <div className='flex flex-col text-white w-[50%] pt-[10%] pl-[10%]'>
           <span className="text-[30px] mt-3">Donate blood, save life!</span>
        <h1 className="text-[38px]  mt-3">
          Your Blood Can Bring Smile In Other Person Life.
        </h1>
        
        <div className="flex items-center mt-[20px]">
            <button className="bg-red-500 p-[10px] w-[200px]  text-white mr-9 cursor-pointer">Donate Now</button>
            <button className='bg-gray-500 p-[10px] w-[200px]  text-white mr-9 cursor-pointer'>Call : 01115876820</button>
        </div>
        </div>
    </div>
  )
}

export default Hero