import React from 'react'
import Image from 'next/image'
import {} from "@next/font/google";
const textStyleBold = {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: "700", 
};
const textStyle={
    textAlign: "center",
    color: "#FFF",
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400", 
};
const awardSection = () => {
    const text1="Unleash Your Potential Through"
    const text2="Thrilling Competitive Events!"
    const text3="Showcase Your Skills and Win Big in Our Prestigious and Thrilling"
    const text4="Competitive Challenges and Contests!"
  return (
    <center>
    <div style={textStyleBold}>
    {text1}
    <br/>
    {text2}
    </div>
    <div style={textStyle}>
    {text3}
    <br/>
    {text4}
    
    <center>
    <br/>
    <svg xmlns="http://www.w3.org/2000/svg" width="159" height="38" viewBox="0 0 159 38" fill="none">
  <rect x="0.95" y="0.95" width="157.1" height="35.2815" rx="17.6408" stroke="white" stroke-width="1.9"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="14" fontFamily="Work Sans">Explore More </text>
</svg>
    </center>
   

    </div>
    <br/>
    <Image 
    src='/Frame29.svg'
    alt='frame29'
    width={100}
    height={100}
    style={{}}
    />
    </center>
  )
}

export default awardSection
