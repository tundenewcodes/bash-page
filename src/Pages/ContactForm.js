import React, { useContext } from 'react'
import Footer from '../components/Footer'
import Headline from '../components/Headline'
import Menu from '../components/Menu'
import { AppContext } from '../store/appReducers'

const ContactForm = () => {
    const appCtx = useContext(AppContext)
  return (
    <div className='w-screen h-full  relative mx-4 bg-black'>
        {   appCtx.showModal  &&  <Menu/>}
        <Headline  title='Alternatively' />
        <div className='w-full h-[calc(100%-80px)] flex   mt-8 flex-col md:flex-row justify-between items-center'>
            <div className='w-[100%]  md:w-[45%] h-1/2 md:h-full flex-col flex justify-start my-auto items-center '>
               
               <div  className='flex-col max-w-[3/5] justify-start mt-20 items-center h-full   '>
               <p className='text-yellow-300 text-start font-bold text-xl md:text-4xl'>You can send me a message here</p>

<p className='text-start  tracking-widest text-gray-300 text-md '>Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.</p>
               </div>
               
            </div>
            <div  className='w-[100%]  md:w-[45%] h-1/2 md:h-full flex justify-between items-center  '>
                <form className='w-full flex-col mt-20 justify-start items-center h-full'>
                   <div className='w-full flex  h-[100px] items-center justify-between'>
                   <input type='text' placeholder='Name' className='w-[49%] h-8 p-2   outline-0 bg-gray-800 text-gray-300 '  />
                   <input type='text' placeholder='Email' className='w-[49%] h-8 p-2  outline-0 bg-gray-800 text-gray-300  '  />
                    </div>
                    <label className='text-gray-300 text-sm md:text-md mt-2'>Message Label</label>
                <div className='w-full flex  justify-between  mt-2  h-8 '>
                    <p className='bg-gray-800  text-sm md:text-md   flex justify-center items-center text-gray-300 '>Business Consultation</p>
                    <p  className='bg-gray-800  text-sm md:text-md flex justify-center items-center text-gray-300  ml-4'>HR Technology </p>
                    <p className='bg-gray-800  text-sm md:text-md flex justify-center items-center text-gray-300  ml-4'>Era Tech</p>
                </div>
                <textarea  className='w-full p-2 h-[250px]  outline-0 bg-gray-800 text-gray-300   mt-2' placeholder='Enter your text here' >

                </textarea>
                <button className='bg-yellow-300  text-lg hover:scale-75  flex items-center justify-center text-white w-[120px] h-8 p-2 cursor-pointer' type='button'>Send</button>
                </form> 
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactForm