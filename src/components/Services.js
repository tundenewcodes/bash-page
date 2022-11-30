import React from "react";

const Services = ({ image, text, description }) => {
  return (
    <div className="w-[3/5] md:w-4/5 lg:w-4/12 my-4 ml-0  mx-4 lg:ml-2 lg:mt-0 relative flex flex-col justify-start bg-gray-900 items-center">
     <div className="top-0 left-0 absolute w-full h--full  bg-grey-light"></div>
      
        <div className="w-full h-9/12 relative">
        <div className="top-0 left-0 absolute w-full h--full  bg-gray-800"></div>
          <img src={image} alt={text} className='w-full h-full opacity-30 object-cover ' />
      
          <p className="top-[180px] lg:top-48 md:top-[380px] text-white font-bold text-lg md:text-3xl  absolute left-0"  >{text}</p>
        </div>
        <div className="h-3/12 w-full mt-4 bg-gray-900 flex flex-col">
          <p  className='text-white  text-sm '> {description} </p>
          <a href="/"  className="text-yellow-300 underline cursor-pointer text-md">see details</a>
        </div>
     
    </div>
  );
};

export default Services;
