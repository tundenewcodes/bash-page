import React, { useContext } from "react";
import Footer from "../components/Footer";
import Headline from "../components/Headline";
import Servicess from "../components/Servicess";
import bookBank from "../assets/images/bk-bank.jpeg";
import blackTechie from "../assets/images/black-techie.jpg";
import hackers from "../assets/images/hackers.jpeg";
import interview from "../assets/images/mck-interview.jpeg";
import tutor from "../assets/images/tutor.jpeg";
import france from "../assets/images/france.jpeg";
import Menu from "../components/Menu";
import { AppContext } from "../store/appReducers";
const Community = () => {
  const appCtx = useContext(AppContext)
  return (
    <div className="w-screen  h-full relative flex flex-col bg-black mt-[40px] mx-4">
         {   appCtx.showModal  &&  <Menu/>}
      <Headline title="Communities" />
      <div className=" w-full mt-4 m-2  h-full flex-row flex md:flex-col justify-between items-center  ">
        <div className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col md:flex-row   ">
          {" "}
          <Servicess
            image={bookBank}
            text="Maryland Book Bank"
            description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
          />
          <Servicess
            image={interview}
            text="NPOWER Mock Interview"
            description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
          />
          <Servicess
            image={hackers}
            text="Hack Baltimore Civic Hackers"
            description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
          />
        </div>
        <div  className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col md:flex-row  ">
        <Servicess
          image={blackTechie}
          text="Baltimore Black Trainees"
          description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
        />
        <Servicess
          image={tutor}
          text="IRS Impact Program"
          description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
        />
        <Servicess
          image={france}
          text="Impact Hub"
          description="Nunc ultrices interdum rutrum. Etiam semper, neque vitae volutpat bibendum, tellus est vestibulum velit, in volutpat est nibh ac magna. Nunc lobortis ipsum et tellus bibendum, a bibendum lacus efficitur."
        />
        </div>

       
      </div>
      <Footer />
    </div>
  );
};

export default Community;
