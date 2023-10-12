import React from "react";
import Classes from "./sidenav.module.css";
const Sidenav = () => {
    function handleClick(e) {
        e.preventDefault();
        const yOffset = -90;
        const id=e.target.getAttribute('name');
        console.log(id);
        const Target=document.getElementById(id);
        const y = Target.getBoundingClientRect().top + window.scrollY + yOffset;
        console.log(y);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    
    return (     
             
      <div className={Classes.sidenav}>
   
      <div className={Classes.imagecontainer}>

             <ul>
                <li onClick={handleClick} ><p className={Classes.gloweffectblue} name='co' >Convenors</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectred} name='gs'>General Secretary</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectpurple} name='con'>Content Team</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectgreen} name='de'>Design</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectorange} name='ev'>Event</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectyellow} name='mk'>Marketing</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectblue} name='pub'>Publicity</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectgreen} name='pr'>Public Relations</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectpurple} name="so">Social Media</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectgreen} name='te'>Tech</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectorange} name='se'>Secretaries</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectred} name='an'>Animation</p></li>
                <li onClick={handleClick} ><p className={Classes.gloweffectblue} name='ad'>Advisors</p></li>

             </ul>
           
             </div>
             </div> 
    )
}

export default Sidenav;