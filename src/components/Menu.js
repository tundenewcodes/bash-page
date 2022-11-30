import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/appReducers'

const Menu = () => {

    const appCtx = useContext(AppContext)
  return (
    <div  onClick={()=>{appCtx.toggleMenu()}} className='w-[200px] transition-all h-screen z-20   top-8 left-0 bg-green-600 absolute flex-col flex justify-start items-center '>


        <Link to='/'>
            <p    className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Home
          </p>
          </ Link>

          <Link to='/portfolio'  ><p   className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            About
          </p></Link>
          
        <Link to='/journey' ><p  className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Journey
          </p></Link>  
        <Link  to='/portfolio'  >

         <p   className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Reinansance Hueman
          </p>
        </Link> 
        <Link to='/community'  > <p   className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Blog
          </p></Link> 
          <Link to='/contact-form'  >
          <p  className={` text-md  md:text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Podcast
          </p>
          </Link>
          <Link to='/contact'>
          <p   className={`text-lg my-4 ml-4 text-gray-300 font-thin  cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Contact
          </p>
          </Link>
    

    </div>
  )
}

export default Menu