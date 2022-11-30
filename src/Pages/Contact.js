import React, { useContext } from "react";

import bashy from "../assets/images/bashy.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Menu from "../components/Menu";
import { AppContext } from "../store/appReducers";

const Contact = () => {
const appCtx = useContext(AppContext)

  return (
    <main className="w-screen relative h-screen mx-4 bg-black overflow-hidden ">
      {   appCtx.showModal  &&  <Menu/>}
     
      <section className="h-[calc(100%-40px)] mt-[20px] w-full   flex-col flex md:flex-row justify-between items-center">
        <div  className="w-full  md:w-[40%] mt-2 lg:mt-0 h-1/2 lg:h-full  flex  flex-col items-center justify-center lg:justify-end">
  <div className="w-full  m-2 p-2 flex-col mb-12 h-[170px]  ">
 
  <h1 className="text-xl  md:text-4xl ml-4 flex items-start justify-start  text-yellow-300">Reach out to me on </h1>
          <h1 className="text-xl  md:text-4xl   flex items-start ml-4 justify-start  text-yellow-300">my social media handles </h1>
 
 
       <p className="text-gray-300  ml-4 text-sm md:text-md">Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur.</p>   
  </div>
       
       
    
          <div className="w-full h-[500px]  flex md:flex-col ml-4   justify-start   -mt-8 md:mt-24 items-center">
            <div className="md:w-full ml-8 sm:ml-0 w-1/2 h-full flex-col md:flex-row  md:h-1/2 flex justify-start items-center">
              <div className=" h-[45px] w-[200px] m-2 cursor-pointer flex justify-start  items-center  ">
             <div className="text-yellow-300 shadow-sm bg-green-200 flex rounded-lg justify-start items-center h-full w-[25%]" >
             <FaInstagram className="text-yellow-300 shadow-sm  h-full w-full   " />
           
              </div> 
              <p  className="text-gray-300 hidden md:block   ml-4">Instagram</p>
              </div>
              <div className=" h-[45px] w-[200px] cursor-pointer flex justify-start  items-center ml-2  ">
             <div className="text-yellow-300 shadow-sm bg-green-200 flex rounded-lg justify-start items-center h-full w-[25%]"> 
              <FaLinkedinIn className="text-yellow-300 shadow-sm  h-full w-full  " /></div>
                <p  className="text-gray-300 hidden md:block   ml-4">Linkedln</p>
              </div>
            </div>
         
            <div className="md:w-full  ml-8 sm:ml-0  w-1/2 h-full flex-col md:flex-row  md:h-1/2 flex justify-start  items-center">
              <div className=" h-[45px] w-[200px] cursor-pointer flex justify-start  items-center m-2  ">
               <div  className="text-yellow-300 shadow-sm bg-green-200 flex rounded-lg justify-start items-center h-full w-[25%]" >
                <FaTwitter className="text-yellow-300 shadow-sm  h-full w-full  " /></div> 
                <p  className="text-gray-300 hidden md:block   ml-4">Twitter</p>
              </div>
              <div className=" h-[45px] w-[200px] cursor-pointer flex justify-start  items-center ml-2  ">
             <div   className="text-yellow-300 shadow-sm bg-green-200 flex rounded-lg justify-start items-center h-full w-[25%]" >
               <FaFacebookF className="text-yellow-300 shadow-sm  h-full w-full  " /></div>  
                <p  className="text-gray-300 hidden md:block   ml-4">Facebook</p>
              </div>
            </div>
            </div>
          </div>
 
        <div className="w-full lg:w-1/2 mt-2 lg:mt-0 h-1/2 lg:h-full  bg-black flex items-center justify-center lg:justify-end">
        <img src={bashy} alt="bashy" className="w-full h-full object-cover" />
        </div>
      </section>
    </main>
  );
};

export default Contact;
