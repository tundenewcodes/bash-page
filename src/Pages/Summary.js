import React, { useContext } from "react";
import Headline from "../components/Headline";
import { LoremIpsum } from "react-lorem-ipsum";
import bacflogo from "../assets/images/baclogo.PNG";
import econet from "../assets/images/econet.PNG";
import Menu from "../components/Menu";
import { AppContext } from "../store/appReducers";

const Summary = () => {
  const appCtx = useContext(AppContext)
  return (
    <div className="w-screen  h-full lg:h-screen flex flex-col relative bg-black mt-[40px] mx-4">
      {   appCtx.showModal  &&  <Menu/>}
      <Headline title="My Business" />

      <div className="justify-between w-full h-full lg:h-full  flex-col lg:flex-row flex mt-12  items-center">
        <div className="w-full h-1/2 lg:w-5/12 lg:h-full justify-start lg:justify-center items-center  ">
          <div className="text-yellow-300 flex flex-col w-full h-28  ">
            <p className=" text-3xl  md:text-5xl  font-bold ">GIVE A HEADER </p>
            <span className=" text-3xl md:text-5xl  font-bold "> HERE</span>
          </div>

          <div className="text-white text-xs md:text-lg font-normal  ">
            <LoremIpsum p={1} className="text-white text-lg" />
          </div>

          <button className="bg-green-700 text-base md:text-lg hover:scale-75 active:scale-75 rounded md:rounded-2xl text-white  w-[100px]  md:w-[130px]  h-[30px] md:h-[50px]   p-1 md:p-2 cursor-pointer  ">
            Get in Touch
          </button>
        </div>

        <div className="justify-between  w-full h-1/2 lg:w-5/12  lg:h-full flex items-center">
          <div className="justify-between p-4 mx-2 bg-green-800 w-1/2 h-[200px] flex flex-col items-start">
     
            <div className="w-1/3  h-8 flex cursor-pointer justify-start">
              <img
                src={bacflogo}
                alt="blogo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className='text-white text-[12px] md:text-md'>
              ultrices interdum rutrum. Etiam semper, neque vitae volutpat
              bibendum, tellus est vestibulum velit, in volutpat est nibh ac
              magna.
            </p>
            <a
              href="/"
              className="text-yellow-300 underline cursor-pointer text-md"
            >
              visit website
            </a>
           
            
          </div>
          <div className="justify-center w-1/2 h-full flex flex-col  items-start">
          <div  className='  p-1 md:p-4 mx-2 bg-green-800  h-[200px] mt-2 w-2/3 flex flex-col justify-start'>
              
              <div  className="w-1/3  h-8 flex cursor-pointer justify-start">
                <img
                  src={econet}
                  alt="blogo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className='text-white text-[12px] md:text-md  '>
                ultrices interdum rutrum. Etiam semper, neque vitae volutpat
                bibendum, tellus est vestibulum velit, in volutpat est nibh ac
                magna.
              </p>
              <a
                href="/"
                className="text-yellow-300 underline cursor-pointer text-md"
              >
                visit website
              </a>
            </div>
            <div  className='  p-1 md:p-4 mx-2 bg-green-800  h-[200px] mt-2 w-2/3 flex flex-col justify-start'>
              
              <div  className="w-1/3  h-8 flex cursor-pointer justify-start">
                <img
                  src={econet}
                  alt="blogo"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className='text-white text-[12px] md:text-md  '>
                ultrices interdum rutrum. Etiam semper, neque vitae volutpat
                bibendum, tellus est vestibulum velit, in volutpat est nibh ac
                magna.
              </p>
              <a
                href="/"
                className="text-yellow-300 underline cursor-pointer text-md"
              >
                visit website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
