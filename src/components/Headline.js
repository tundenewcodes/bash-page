import React from 'react'

const Headline = ({title}) => {
  return (
    <div className='w-full  h-4 bg-black flex justify-between items-center '>
        
<div className='border-b-2 w-4/12 md:w-5/12 h-full'></div>
<div className='w-2/12 bg-black -ml-[20px]  md:ml-0 text-yellow-300 justify-center items-center text-base  text-center md:text-lg  mt-2 h-full  flex '>
<p className='text-base text-yellow-300  text-center md:text-lg h-full  w-full '>{title}</p>

</div>
<div className='border-b-2 w-4/12 md:w-5/12 h-full'></div>

    </div>
  )
}

export default Headline