import React, { useContext } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import bashy from "../assets/images/bashy.jpg";
import Menu from "../components/Menu";
import { AppContext } from "../store/appReducers";

const WelcomePage = () => {

  const appCtx = useContext(AppContext)
  return (
    <main className="w-screen h-full relative " >
{   appCtx.showModal  &&  <Menu/>}

    <div  className="w-full h-screen   bg-black flex flex-col lg:flex-row justify-between items-center mx-4 ">


    <div className=" w-full lg:w-1/2  h-1/2 lg:h-full flex flex-col justify-start md:justify-center  ">
       
       <div className="text-yellow-300 flex flex-col w-full h-28  ">
         <p className="text-3xl md:text-5xl  font-bold ">HI, I AM</p>
         <span className="text-3xl md:text-5xl  font-bold "> BASHIRAT ARE</span>
       </div>

       <div className="text-white text-sm md:text-lg font-normal  ">
         <LoremIpsum p={1} className="text-white  text-sm md:text-lg" />
       </div>

       <button className="bg-green-700 text-base md:text-lg hover:scale-75 active:scale-75 rounded md:rounded-2xl text-white  w-[100px]  md:w-[130px]  h-[30px] md:h-[50px]   p-1 md:p-2 cursor-pointer  ">
         Get in Touch
       </button>
     </div>
   

   <div className="w-full lg:w-1/2 mt-2 lg:mt-0 h-1/2 lg:h-full  bg-black flex items-center justify-center lg:justify-end">
     <img src={bashy} alt="bashy" className="w-full h-full object-cover" />
   </div>
    </div>
       
    

     
     
    </main>
  );
};

export default WelcomePage;
