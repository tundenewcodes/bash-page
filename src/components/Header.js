import React, { useContext } from "react";
import logo from "../assets/images/logo.PNG";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
//import { Link } from "react-router-dom";
import Navigaion from "./Navigaion";
import { AppContext } from "../store/appReducers";

const Header = () => {
const appCtx = useContext(AppContext)
  return (
    <header className="z-10  relative   top-0 flex w-screen h-[40px]  mx-4 bg-black justify-between items-center ">
      <div className="max-w-[30px] h-[30px] flex items-center justify-between border-2 border-yellow-300">
        <img className="object-cover w-full h-full" src={logo} alt="logo" />
      </div>


      <div>
        <div>
      {appCtx.showMenu ?  <div className="bg-black md:hidden top-2 absolute h-[40px]  w-[40px]  cursor-pointer flex justify-start items-center ml-2  ">
          <FiMenu  onClick={appCtx.toggleMenu} className="text-yellow-300  h-[35px] w-[35px] animate-bounce  " />
        </div> :  <div className="bg-black md:hidden top-2 absolute h-[40px]  w-[40px]  cursor-pointer flex justify-start items-center ml-2  ">
          <AiOutlineClose   onClick={appCtx.toggleMenu}    className="text-yellow-300  h-[35px] w-[35px] animate-bounce  " />
        </div> }
      
        </div>
        <Navigaion/>
      </div>
      
     

      <div className="flex bg-black  h-[30px] w-[200px] justify-center items-center  ">
        <div className="bg-white h-[20px] w-[20px] cursor-pointer flex justify-center items-center ml-2  ">
          <FaTwitter className="text-black  h-[15px] w-[15px]   " />
        </div>
        <div className="bg-white h-[20px] w-[20px] cursor-pointer flex justify-center items-center ml-2  ">
          <FaFacebookF className="text-black h-[15px] w-[15px]   " />
        </div>
        <div className="bg-white h-[20px] w-[20px] cursor-pointer flex justify-center items-center ml-2  ">
          <FaLinkedinIn className="text-black h-[15px] w-[15px]   " />
        </div>
        <div className="bg-white h-[20px] w-[20px] cursor-pointer flex justify-center items-center ml-2  ">
          <FaInstagram className="text-black h-[15px] w-[15px]   " />
        </div>
      </div>
    </header>
  );
};

export default Header;
