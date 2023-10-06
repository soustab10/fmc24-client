import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Index from "../../events";
import Link from "next/link";

import Image from "next/image";

const divStyle = {
    minHeight: "100px",
  };

const Photography = () => {
    return (
        <div className="flex flex-col">
            <Header/>
            <div>
      <div style={divStyle}><h1 hidden>Hello</h1></div>
      
        <div className="flex flex-row justify-center items-center text-[18px] m-[20px] ">
           <div className="border border-white bg-gradient-to-t from-white/10 to-white/30 text-white flex flex-row h-[80px]   justify-center items-center rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
             <div className="w-[170px] flex justify-center items-center glow-effect-blue"> 
             <Link href="../EventPages/Photography" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Photography</Link>
             </div>
             <div className="w-[160px] flex justify-center items-center glow-effect-green">
             <Link href="../EventPages/Design" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Design</Link>
             </div>
             <div className="w-[160px] flex justify-center items-center glow-effect-red">
             <Link href="../EventPages/Animation" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Animation</Link>
             </div>
             <div className="w-[190px] flex justify-center items-center glow-effect-yellow">
             <Link href="../EventPages/Cinematography" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Cinematography</Link>
             </div>
             <div className="w-[160px] flex justify-center items-center glow-effect-orange">
             <Link href="../EventPages/Media" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Media</Link>
             </div>
             <div className="w-[160px] flex justify-center items-center glow-effect-purple">
             <Link href="../EventPages/Outreach" className="hover:text-[24px] hover:font-semibold transition-all duration-5000 ease-in-out">Outreach</Link> 
             </div>
             
           </div>
        </div> 
        </div>
        <div className="flex flex-row flex-wrap justify-between p-24 text-[14px]">
<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">

  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Director&apos;s Cut</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants of the event will be tasked with producing a short film within a tight deadline of 50 hours. The theme for their film will be unveiled at the start of the event, and all filming and production will be conducted on the campus.
    </p>
    <a href="https://docs.google.com/document/d/1dQT-ollFDJt4ZcK_JiTEhWAqDWbKhJ05/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Frame By Frame</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Frame by Frame is an Open-theme Online event, and stop-motion entries are to be submitted in due time. The participants need to create a stop-motion movie using only inanimate objects.
    </p>
    <a href="https://docs.google.com/document/d/1Ok5ZLXcz2HVHTOESVQhu89y3B5uOD88h/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Make It short</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants will be given different genres ,from which they will choose to make a video based on the clips given to them .The time duration of the video can be from 30-60 seconds.
    </p>
    <a href="https://docs.google.com/document/d/1N37Ti5pcLWnhqWdg1fE4htoX3ifBch9u/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_cine.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">That&apos;s How B-roll</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    For this event, you&apos;ve got to aim the lenses inwards and indulge in the mesmerizing beauty of life&apos;s precious moments; hence the theme - “Joy in Motion: Cinematic Vignettes of Life&apos;s Beauty”. Let each frame ignite your senses and remind you of the remarkable beauty that surrounds us all and make everyone and their friends turn their heads
    </p>
    <a href="https://docs.google.com/document/d/1fMeOUIcfBTNM4seOTyEnFiyx452ItjYJ/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>


        </div>
        <Footer/>
    </div>
    );
};

export default Photography
