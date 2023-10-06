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
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">AdMad</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    The participants need to make an advertisement on the provided, within 36 hrs. The themes for the same would be released at the start of theevent and participants need to submit their entries in due time.
    </p>
    <a href="https://docs.google.com/document/d/1bXvcypI65JJHu7yxva2a-POO6XUFGcfa/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Vlogoholic</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    You have to make a video log in the range of 60-600 seconds. It can be about anything- visiting nearby attractions, indulging in festive activities,pulling pranks on people, etc. - as long as it is exciting and in which you can show the theme “COLOUR OF MY CITY”.
    </p>
    <a href="https://docs.google.com/document/d/1gsoFJ1Mcr0h9u9rb5Fh7pLbIHcRsEz0V/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[15px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>

<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Rant It</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    You will have to give a live solo open-mic performance of your rant. It could be a monologue, an interview, a prank or anything else that can captivate the interest of the public
    </p>
    <a href="https://docs.google.com/document/d/18S9lGeLBacvsHgW-lVbRaI0qUFmTnI2w/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
    <div className="my-3.5 align-middle justify-evenly">
        <button className="border p-2 border-white rounded-[12.5px] hover:text-[15px] hover:font-semibold transition-all duration-5000 ease-in-out ">REGISTRATION WILL BE LIVE SOON</button>
    </div>
  </div>
</div>
 
<div class="w-[380px] h-[440px] justify-center my-6 border border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[25px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
  <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
  <div class=" flex flex-rows justify-center font-bold text-3xl mb-2 my-3.5"><div><Image className="icon" src={"/icon_outreach.png"} width={40} height={10} alt="cameras"/></div><div className="ml-4">Documentary</div></div>
    <p class="text-justify my-3.5 h-[180px]">
    Step into the world of storytelling through lenses and frames, where truth meets creativity, and reality is transformed into compelling narratives. Join us for &apos;Capturing Reality: The Art of Documentary Filmmaking,&apos; a captivating and enlightening documentary-making event that dives deep into the fascinating realm of non-fiction storytelling. Participants are required to prepare a documentary film on any topic about any genre.
    </p>
    <a href="https://docs.google.com/document/d/1-JTd2yaNu0E32Cb8AUZnXsWsghbltlCY/edit" className="text-white-800 my-3.5 italic hover:underline">VIEW PROBLEM STATEMENT</a>
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
