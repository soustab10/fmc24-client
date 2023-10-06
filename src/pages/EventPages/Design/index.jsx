import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Index from "../../events";
import Link from "next/link";
import EventCard from "../EventCard";
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
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">ReInevent</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Logos have always been an integral part of a brand's identity. The perfect blend of a minimal versatile and memorable design creates a great logo. The FMC Weckend brings you the opportunity to redesign a logo and create a fresh impression for a brand. The most original and creative design amongst all will be rewarded!
    </p>
    <a href="https://docs.google.com/document/d/10yVwlvCNAlB3yvuT1aSKZeE5ZhIvh5CP/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Design-a-thon</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is a rebranding challenge, you'll have to rebrand an intriguing company using a different product line than the one it now uses. It will be a 24-hour offline event. It will be a Team event with 1-4 people in each team.
    </p>
    <a href="https://docs.google.com/document/d/1ItYviZS1oCYNqIT79xAaAfBod7LXjgdK/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_design.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Design the Tunes</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Its an Online design challenge to design the cover page of an English song or an English album.You can also use the elements of the songs or album for the cover. And the prior entries are also allowed. But also submit the 3 screenshot showing stages of your work in process with submission
    </p>
    <a href="https://docs.google.com/document/d/1BkCbkR9TZbyjDzrlItjLJuesXqu2usfk/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>


        </div>
        <Footer/>
    </div>
    );
};

export default Photography
