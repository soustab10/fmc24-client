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
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_media.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Infinite Tales</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Participants have to come in pairs at the allotted location.They will be provided with the topics randomly These topics can range from an idea or words to an opening phrase.You will get a partner with whom you have to make the story on the basis of chit system.You and your partner have to complete the story by adding sentences alternatively.A twist in the middle of the story will be given by the judges to spice things up a bit.
    </p>
    <a href="https://docs.google.com/document/d/1eQ0PQbnnHJlSJOVrpL2Gq0_08cMQ2hmn/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_media.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Straight From Site</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Whatever the news may be, wherever it may be, regardless of how harsh the circumstances might be, you can always count on a reporter to deliver the news to you in the comfort of your home. In this event, you will put yourself in the shoes of such on-site reporters. Analyse the scene, collect your thoughts and speak!
    </p>
    <a href="https://docs.google.com/document/d/1QUJTU327wbVccSlwneJAxAYEkNpfby40/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_media.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Writer's Block</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Embark on a thrilling journey of creativity in our script writing competition! Ignite your imagination and weave mesmerizing tales. Showcase your storytelling finesse and make your script come alive in this exhilarating challenge.
    </p>
    <a href="https://docs.google.com/document/d/1FtkT0f_oZWWcve_BvN-Nd_XTynmXG9bY/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
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
