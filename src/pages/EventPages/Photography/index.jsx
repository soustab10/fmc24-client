import React from "react";
import Header from "../../landingpage/Header";
import Footer from "../../landingpage/Footer";
import Index from "../../events";
import Link from "next/link";

import Image from "next/image";
import "./styles.module.css";
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

  <div class="flex flex-col text-center justify-center  px-6 py-4">
    <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Snapchase</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Snapchase is a treasure hunt where you have to take pictures of a special place by solving clues and riddles and submit them before time runs out.
    </p>
    <a href="https://drive.google.com/file/d/15WUfJ3wn_mWCNDiFmcOw_6DlY3z7ch5P/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-[24px] mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Portfolio in 24 Hours</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    We click a number of pictures and put them in the gallery, but Portfolio in 24 hrs of FMC Weekend brings you a chance to show your skills on Indias largest digital art festival. 
    </p>
    <a href="https://drive.google.com/file/d/1BhtGMD-lpnIZAv-8f1CIjZhPV2PDiS-B/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Photoart</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is what Manipulation means,so lets dive into this imaginary world and paint the canvas with our imagination.Themes on which the event will take place are given below: Post Apocalypse, Wildlife, Retro Futurism, Surrealism
    </p>
    <a href="https://drive.google.com/file/d/1qSMgfIKxQB8GIQBn74k2hwd01Jkt4HEo/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Instameet</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    This is an offline theme based photography event.This event bears the challenge to capture the beauty of Varanasi, its lifestyle, communities, cultures, rituals, and religion. A photowalk will be organized during which you will have to click the pictures for the event submission.
    </p>
    <a href="https://drive.google.com/file/d/1x4_OCREwU6SjhTbnKNcIQ9o-2774uam-/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_photo.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Infocus</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Embrace the essence of creativity and composition as the pivotal criteria for your submissions. Your artwork should resonate with one of the following themes, and winners will be recognized separately for each theme: 1.Long Exposure 2.Minimal 3.Culture of India  4.Monochrome
    </p>
    <a href="https://drive.google.com/file/d/1Nw5y8pmE8JL4BKq_CNwyhi90_nfqN9w3/view?usp=drive_link" className="text-white-800 my-3.5 italic hover:underline">View Problem Statement</a>
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
