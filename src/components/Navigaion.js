import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/appReducers'

const Navigaion = () => {
   
const appCtx = useContext(AppContext)
    
  return (


<div className="md:flex hidden bg-black w-[500px] justify-start  mr-4 items-center  ">
        <Link to='/'>
            <p  onClick={appCtx.changeActiveHome}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.homeisActive  ? 'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Home
          </p>
          </ Link>

          <Link to='portfolio'  ><p onClick={appCtx.changeActiveAbout}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.aboutisActive ? 'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            About
          </p></Link>
          
        <Link to='journey' ><p onClick={appCtx.changeActiveJourney}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.journeyisActive ?'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Journey
          </p></Link>  
        <Link  to='portfolio'  >

         <p onClick={appCtx.changeActiveHuman}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.humanisActive ?'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Reinansance Hueman
          </p>
        </Link> 
        <Link to='community'  > <p onClick={appCtx.changeActiveBlog}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.blogisActive ?'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Blog
          </p></Link> 
          <Link to='contact-form'  >
          <p onClick={appCtx.changeActivePodcast}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.podcastisActive ?'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Podcast
          </p>
          </Link>
          <Link to='/contact'>
          <p onClick={appCtx.changeActiveContact}  className={`text-xs ml-4 text-gray-300 font-thin ${appCtx.contactisActive ?'text-yellow-300' : 'text-gray-300'} cursor-pointer  hover:text-yellow-300 focus:text-yellow-300`}>
            Contact
          </p>
          </Link>
         
        </div>

    
  )
}

export default Navigaion