import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <foooter  className='z- flex w-full h-[40px] bg-black text-white justify-between items-center   '>
    <p  className='text-sm hidden md:block md:text-md text-gray-300'>Copyright &copy; 2021 Bashirat Are | Designed by BACFInc</p> 

        <div className='flex bg-black  h-[30px] w-[200px] justify-center items-center  '>
<div  className='bg-white h-[10px]  md:h-[20px]  w-[10px] md:w-[20px] cursor-pointer flex justify-center items-center ml-2  '>
    <FaTwitter  className='text-black  h-[20px] w-[20px]   ' /></div>
<div  className='bg-white h-[10px]  md:h-[20px]  w-[10px] md:w-[20px] cursor-pointer flex justify-center items-center ml-2  '>
    <FaFacebookF className='text-black h-[20px] w-[20px]   '/></div>
<div className='bg-white h-[10px]  md:h-[20px]  w-[10px] md:w-[20px] cursor-pointer flex justify-center items-center ml-2  '><FaLinkedinIn className='text-black h-[20px] w-[20px]   '/>
</div>
<div  className='bg-white h-[10px]  md:h-[20px]  w-[10px] md:w-[20px] cursor-pointer flex justify-center items-center ml-2  '><FaInstagram className='text-black h-[20px] w-[20px]   '/></div>
        </div>
    </foooter>
  )
}

export default Footer