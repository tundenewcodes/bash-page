import React from "react";

const Servicess = ({ image, text, description }) => {
  return (
    <div className="w-5/5 md:w-full  my-4 ml-0  mx-4 lg:ml-2 lg:mt-0 relative flex flex-col justify-start items-center">
     {/* <div className="top-0 left-0 absolute w-full h-full  bg-gray-600"></div> */}
      
        <div className="w-full h-9/12 relative text-lg md:text-3xl">
        {/* <div className="top-0 left-0 absolute w-full h-full  bg-gray-800"></div> */}
          <img src={image} alt={text} className='w-full h-full opacity-30 object-cover ' />
      
          <p className="top-[80px] lg:top-48 md:top-36 text-white font-bold text-sm  md:text-xl lg:text-3xl  absolute left-0"  >{text}</p>
        </div>
        <div className="h-3/12 w-full mt-4 bg-gray-900 flex flex-col">
          <p  className='text-white  text-sm '> {description} </p>
          <a href="/"  className="text-yellow-300 underline cursor-pointer text-md">see details</a>
        </div>
     
    </div>
  );
};

export default Servicess;
